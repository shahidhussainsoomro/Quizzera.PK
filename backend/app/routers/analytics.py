from fastapi import APIRouter

router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.get("/summary")
def summary() -> dict:
    return {"message": "Analytics summary placeholder"}


@router.get("/export")
def export_report() -> dict:
    return {"message": "Exportable reports (PDF/CSV) placeholder"}
