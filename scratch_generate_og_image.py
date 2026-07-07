import math
import os
from PIL import Image, ImageDraw, ImageFont, ImageOps

def rotate_point(cx, cy, x, y, angle_deg):
    angle_rad = math.radians(angle_deg)
    x_rel = x - cx
    y_rel = y - cy
    x_new = x_rel * math.cos(angle_rad) - y_rel * math.sin(angle_rad)
    y_new = x_rel * math.sin(angle_rad) + y_rel * math.cos(angle_rad)
    return cx + x_new, cy + y_new

def draw_round_line(draw, p1, p2, width, color):
    draw.line([p1, p2], fill=color, width=int(width))
    r = width / 2
    draw.ellipse([p1[0]-r, p1[1]-r, p1[0]+r, p1[1]+r], fill=color)
    draw.ellipse([p2[0]-r, p2[1]-r, p2[0]+r, p2[1]+r], fill=color)

def main():
    # 1. Base paths
    base_dir = "/Users/shalomtalesman/Downloads/ARENA"
    bg_image_path = os.path.join(base_dir, "images", "black-woman-sitting-in-front-of-group-of-multi-eth-2026-03-24-06-00-42-utc.jpg")
    font_path_bold = os.path.join(base_dir, "whyte-inktrap", "WhyteInktrap-Bold.ttf")
    font_path_medium = os.path.join(base_dir, "whyte-inktrap", "WhyteInktrap-Medium.ttf")
    output_path = os.path.join(base_dir, "images", "link_preview.png")
    public_output_dir = os.path.join(base_dir, "public", "images")
    public_output_path = os.path.join(public_output_dir, "link_preview.png")

    if not os.path.exists(bg_image_path):
        print(f"Error: Base image not found at {bg_image_path}")
        return

    # 2. Load and crop background image to 1200x630
    bg = Image.open(bg_image_path)
    og_img = ImageOps.fit(bg, (1200, 630), Image.Resampling.LANCZOS)

    # 3. Create dark translucent overlay
    # Deep slate dark green overlay matching Strategy Arena brand tone
    overlay = Image.new("RGBA", (1200, 630), (8, 15, 12, 215)) # 84% opacity for better text contrast
    img = Image.alpha_composite(og_img.convert("RGBA"), overlay)
    draw = ImageDraw.Draw(img)

    white_color = (255, 255, 255, 255)
    yellow_color = (244, 231, 35, 255) # #F4E723

    # 4. Paste the official Logo (view_logo.png)
    logo_path = os.path.join(base_dir, "view_logo.png")
    if os.path.exists(logo_path):
        logo_img = Image.open(logo_path).convert("RGBA")
        logo_w, logo_h = logo_img.size
        # Scale the logo up for high-resolution visual quality
        scale = 2.5
        new_w = int(logo_w * scale)
        new_h = int(logo_h * scale)
        logo_resized = logo_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Paste centered horizontally, Y = 150
        logo_x = 600 - new_w // 2
        logo_y = 150
        img.paste(logo_resized, (logo_x, logo_y), logo_resized)
    else:
        print("Warning: view_logo.png not found, skipping logo rendering.")

    # 5. Draw Tagline and Website info
    try:
        tagline_font = ImageFont.truetype(font_path_medium, 36)
        info_font = ImageFont.truetype(font_path_medium, 22)
        url_font = ImageFont.truetype(font_path_bold, 28)
    except IOError:
        print("Font not found, using default font.")
        tagline_font = ImageFont.load_default()
        info_font = ImageFont.load_default()
        url_font = ImageFont.load_default()

    # Tagline / Sentence (Centered and wrapped)
    line1 = "La croissance d'une entreprise"
    line2 = "ne doit rien au hasard."
    
    line1_w = draw.textlength(line1, font=tagline_font)
    line2_w = draw.textlength(line2, font=tagline_font)
    
    draw.text((600 - line1_w / 2, 285), line1, fill=white_color, font=tagline_font)
    draw.text((600 - line2_w / 2, 335), line2, fill=white_color, font=tagline_font)

    # Subtle yellow separator line
    line_w = 120
    draw.line([(600 - line_w / 2, 420), (600 + line_w / 2, 420)], fill=yellow_color, width=4)

    # Contact details & Location info
    contact_info = "Cabinet de conseil  •  Cotonou, Bénin"
    contact_info_w = draw.textlength(contact_info, font=info_font)
    draw.text((600 - contact_info_w / 2, 455), contact_info, fill=(165, 168, 166, 255), font=info_font)

    # Website URL at the bottom
    url = "strategie-arena.com"
    url_w = draw.textlength(url, font=url_font)
    draw.text((600 - url_w / 2, 510), url, fill=white_color, font=url_font)

    # 6. Save final image
    img.convert("RGB").save(output_path, "PNG")
    print(f"Success! Link preview image created at {output_path}")

    # Save to public folder too
    os.makedirs(public_output_dir, exist_ok=True)
    img.convert("RGB").save(public_output_path, "PNG")
    print(f"Success! Link preview image copied to {public_output_path}")

if __name__ == "__main__":
    main()
