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
    bg_image_path = os.path.join(base_dir, "images", "young-black-man-collaborating-with-colleagues-in-m-2026-01-21-02-38-50-utc.jpg")
    font_path = os.path.join(base_dir, "whyte-inktrap", "WhyteInktrap-Bold.ttf")
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
    overlay = Image.new("RGBA", (1200, 630), (8, 15, 12, 210)) # 82% opacity
    img = Image.alpha_composite(og_img.convert("RGBA"), overlay)
    draw = ImageDraw.Draw(img)

    # 4. Draw Logo Icon
    # We want a 180x180 icon centered at X=600, Y=180
    logo_size = 180
    cx, cy = 600, 180
    scale = logo_size / 100.0  # Scale from 100x100 SVG coordinates

    # Colors
    yellow_color = (244, 231, 35, 255) # #F4E723
    white_color = (255, 255, 255, 255)

    # Draw spokes
    spoke_angles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270]
    for angle in spoke_angles:
        p1 = rotate_point(50, 50, 68, 50, angle)
        p2 = rotate_point(50, 50, 88, 50, angle)
        # Scale and shift to cx, cy
        p1_scaled = (cx + (p1[0] - 50) * scale, cy + (p1[1] - 50) * scale)
        p2_scaled = (cx + (p2[0] - 50) * scale, cy + (p2[1] - 50) * scale)
        draw_round_line(draw, p1_scaled, p2_scaled, 8 * scale, yellow_color)

    # Draw arrow line
    ap1 = rotate_point(50, 50, 56, 50, -45)
    ap2 = rotate_point(50, 50, 84, 50, -45)
    ap1_scaled = (cx + (ap1[0] - 50) * scale, cy + (ap1[1] - 50) * scale)
    ap2_scaled = (cx + (ap2[0] - 50) * scale, cy + (ap2[1] - 50) * scale)
    draw_round_line(draw, ap1_scaled, ap2_scaled, 8 * scale, white_color)

    # Draw arrow head
    hp1 = rotate_point(50, 50, 72, 38, -45)
    hp2 = rotate_point(50, 50, 86, 50, -45)
    hp3 = rotate_point(50, 50, 72, 62, -45)
    
    hp1_scaled = (cx + (hp1[0] - 50) * scale, cy + (hp1[1] - 50) * scale)
    hp2_scaled = (cx + (hp2[0] - 50) * scale, cy + (hp2[1] - 50) * scale)
    hp3_scaled = (cx + (hp3[0] - 50) * scale, cy + (hp3[1] - 50) * scale)
    
    draw_round_line(draw, hp1_scaled, hp2_scaled, 8 * scale, white_color)
    draw_round_line(draw, hp2_scaled, hp3_scaled, 8 * scale, white_color)

    # 5. Draw Title and Subtitle Text
    try:
        # Load fonts
        title_font = ImageFont.truetype(font_path, 68)
        tagline_font = ImageFont.truetype(font_path, 24)
        url_font = ImageFont.truetype(font_path, 20)
    except IOError:
        print("Font not found, using default font.")
        title_font = ImageFont.load_default()
        tagline_font = ImageFont.load_default()
        url_font = ImageFont.load_default()

    # Text parts
    text_strategy = "STRATEGY "
    text_arena = "ARENA"
    
    # Calculate widths
    strategy_w = draw.textlength(text_strategy, font=title_font)
    arena_w = draw.textlength(text_arena, font=title_font)
    total_title_w = strategy_w + arena_w
    
    # Draw centered Title at Y = 340
    title_y = 340
    start_x = 600 - (total_title_w / 2)
    draw.text((start_x, title_y), text_strategy, fill=white_color, font=title_font)
    draw.text((start_x + strategy_w, title_y), text_arena, fill=yellow_color, font=title_font)

    # Draw tagline at Y = 440
    tagline = "CONSEIL EN TRANSFORMATION DIGITALE"
    tagline_w = draw.textlength(tagline, font=tagline_font)
    draw.text((600 - tagline_w / 2, 440), tagline, fill=white_color, font=tagline_font)

    # Draw regions at Y = 480
    regions = "BÉNIN & AFRIQUE DE L'OUEST"
    regions_w = draw.textlength(regions, font=tagline_font)
    draw.text((600 - regions_w / 2, 485), regions, fill=(165, 168, 166, 255), font=tagline_font)

    # Draw yellow line decorator at Y = 535
    line_w = 120
    draw.line([(600 - line_w / 2, 535), (600 + line_w / 2, 535)], fill=yellow_color, width=4)

    # Draw Website URL at Y = 560
    url = "strategyarena.com"
    url_w = draw.textlength(url, font=url_font)
    draw.text((600 - url_w / 2, 560), url, fill=white_color, font=url_font)

    # 6. Save final image
    img.convert("RGB").save(output_path, "PNG")
    print(f"Success! Link preview image created at {output_path}")

    # Save to public folder too
    os.makedirs(public_output_dir, exist_ok=True)
    img.convert("RGB").save(public_output_path, "PNG")
    print(f"Success! Link preview image copied to {public_output_path}")

if __name__ == "__main__":
    main()
