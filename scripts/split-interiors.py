"""Split the supplied KÝMARE interiors contact sheet into its nine source panels."""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "pictures" / "interiors.png"
OUTPUTS = (
    ROOT / "pictures" / "interiors",
    ROOT / "public" / "pictures" / "interiors",
)

# Bounds follow the visible white gutters in the supplied 1536 × 1024 artwork.
# A pixel is inset at each edge so no separator is retained in the final crops.
CROPS = {
    "arrival.jpg": (0, 0, 596, 365),
    "olive-tree-room.jpg": (600, 0, 1108, 365),
    "bar.jpg": (1112, 0, 1536, 365),
    "open-kitchen.jpg": (0, 369, 699, 671),
    "banquette.jpg": (703, 369, 1042, 671),
    "private-dining.jpg": (1046, 369, 1536, 671),
    "lounge.jpg": (0, 677, 469, 1024),
    "after-dark.jpg": (473, 677, 1198, 1024),
    "hallway.jpg": (1202, 677, 1536, 1024),
}


def main() -> None:
    for output in OUTPUTS:
        output.mkdir(parents=True, exist_ok=True)
    with Image.open(SOURCE) as source:
        for filename, bounds in CROPS.items():
            crop = source.crop(bounds)
            for output in OUTPUTS:
                crop.save(output / filename, "JPEG", quality=96, subsampling=0, optimize=True)
            print(f"{filename}: {crop.width}x{crop.height}")


if __name__ == "__main__":
    main()
