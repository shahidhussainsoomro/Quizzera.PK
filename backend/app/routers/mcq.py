from fastapi import APIRouter

router = APIRouter(prefix="/mcqs", tags=["mcqs"])


@router.post("")
def create_mcq() -> dict:
    return {"message": "MCQ create placeholder"}


@router.get("")
def list_mcqs() -> dict:
    return {"message": "MCQ list placeholder"}


@router.put("/{mcq_id}")
def update_mcq(mcq_id: int) -> dict:
    return {"message": f"MCQ {mcq_id} update placeholder"}


@router.delete("/{mcq_id}")
def delete_mcq(mcq_id: int) -> dict:
    return {"message": f"MCQ {mcq_id} delete placeholder"}


@router.post("/bulk-import")
def bulk_import() -> dict:
    return {"message": "Bulk import (CSV/Excel/JSON) placeholder"}
