from fastapi import APIRouter

router = APIRouter(prefix="/student", tags=["student"])


@router.post("/practice")
def start_practice() -> dict:
    return {"message": "Practice session placeholder"}


@router.post("/attempts")
def submit_attempt() -> dict:
    return {"message": "Attempt submission placeholder"}


@router.post("/bookmarks")
def bookmark_question() -> dict:
    return {"message": "Bookmark placeholder"}


@router.get("/results")
def results() -> dict:
    return {"message": "Results placeholder"}
