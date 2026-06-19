import os
from html.parser import HTMLParser

class CleanStructureExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_style = False
        self.in_script = False
        self.current_tag = None
        self.sections = []
        self.current_section = None
        self.current_headings = []
        self.current_texts = []

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        if tag == 'style':
            self.in_style = True
        elif tag == 'script':
            self.in_script = True
        
        attrs_dict = dict(attrs)
        class_name = attrs_dict.get('class', '')
        id_name = attrs_dict.get('id', '')
        
        if tag == 'section' or (tag == 'div' and 'section' in class_name) or (tag == 'div' and 'hero' in class_name) or (tag == 'div' and 'wrapper' in class_name and 'nav' not in class_name):
            if self.current_section:
                self.sections.append({
                    'section': self.current_section,
                    'headings': list(self.current_headings),
                    'texts': list(self.current_texts)
                })
            self.current_section = f"{tag}.{class_name.replace(' ', '.')}" if class_name else tag
            self.current_headings = []
            self.current_texts = []
            
        elif tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.current_headings.append((tag, class_name, ""))

    def handle_endtag(self, tag):
        if tag == 'style':
            self.in_style = False
        elif tag == 'script':
            self.in_script = False
        self.current_tag = None

    def handle_data(self, data):
        if self.in_style or self.in_script or not self.current_section:
            return
        clean_data = data.strip()
        if clean_data:
            if self.current_headings and self.current_headings[-1][2] == "" and self.current_tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
                tag, cls, _ = self.current_headings[-1]
                self.current_headings[-1] = (tag, cls, clean_data)
            else:
                if len(clean_data) > 3 and clean_data not in self.current_texts:
                    self.current_texts.append(clean_data)

    def close(self):
        super().close()
        if self.current_section:
            self.sections.append({
                'section': self.current_section,
                'headings': list(self.current_headings),
                'texts': list(self.current_texts)
            })

input_path = '/Users/shalomtalesman/.gemini/antigravity-ide/brain/4a016de4-8a61-4249-b8fc-4e8f3a15e495/.system_generated/steps/10/content.md'
if os.path.exists(input_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    parser = CleanStructureExtractor()
    parser.feed(html)
    parser.close()
    
    print("=== SANDRIO HOME V2 OUTLINE (FIRST 12 SECTIONS) ===")
    for idx, sec in enumerate(parser.sections[:12]):
        print(f"\n[{idx+1}] Section: {sec['section']}")
        if sec['headings']:
            print("  Headings:")
            for tag, cls, val in sec['headings']:
                print(f"    - {tag.upper()} ({cls}): {val}")
        if sec['texts']:
            print("  Key Texts (First 8 unique):")
            for txt in sec['texts'][:8]:
                print(f"    * {txt}")
else:
    print(f"File not found: {input_path}")
