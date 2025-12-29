from fastapi import APIRouter

from app.schemas.profile import ProfileUpdate

router = APIRouter(prefix="/teacher", tags=["teacher"])


@router.post("/classes")
def create_class() -> dict:
    return {"message": "Class/group creation placeholder"}


@router.post("/assignments")
def create_assignment() -> dict:
    return {"message": "Assignment creation placeholder"}


@router.post("/exams")
def create_teacher_exam() -> dict:
    return {"message": "Teacher exam creation placeholder"}


@router.get("/analytics")
def teacher_analytics() -> dict:
    return {"message": "Teacher analytics placeholder"}


@router.put("/profile")
def update_profile(payload: ProfileUpdate) -> dict:
    return {"message": "Teacher profile updated", "profile": payload.model_dump()}
