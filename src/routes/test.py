from fontParts.world import NewFont
import shutil

# Create a new font
font = NewFont()
font.info.familyName = "SimpleFont"
font.info.styleName = "Regular"

# Define some basic glyphs


def create_glyph(font, glyph_name, width=600):
    glyph = font.newGlyph(glyph_name)
    glyph.width = width
    pen = glyph.getPen()

    # Simple shapes for demonstration
    if glyph_name == "A":
        pen.moveTo((100, 0))
        pen.lineTo((300, 700))
        pen.lineTo((500, 0))
        pen.lineTo((400, 0))
        pen.lineTo((300, 500))
        pen.lineTo((200, 0))
        pen.closePath()
    elif glyph_name == "B":
        pen.moveTo((100, 0))
        pen.lineTo((100, 700))
        pen.lineTo((400, 700))
        pen.lineTo((450, 650))
        pen.lineTo((450, 400))
        pen.lineTo((400, 350))
        pen.lineTo((450, 300))
        pen.lineTo((450, 50))
        pen.lineTo((400, 0))
        pen.closePath()
    elif glyph_name == "C":
        pen.moveTo((400, 700))
        pen.lineTo((100, 700))
        pen.lineTo((50, 650))
        pen.lineTo((50, 50))
        pen.lineTo((100, 0))
        pen.lineTo((400, 0))
        pen.closePath()

    glyph.update()


# Create glyphs
for glyph_name in ["A", "B", "C"]:
    create_glyph(font, glyph_name)

# Save the font as a UFO file
font_path = "SimpleFont.ufo"
font.save(font_path)
print("Font saved as SimpleFont.ufo")
shutil.make_archive("font", "zip", ".", font_path)
