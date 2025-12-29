from fastapi import APIRouter

router = APIRouter(prefix="/institutions", tags=["institutions"])


@router.post("")
def create_institution() -> dict:
    return {"message": "Institution creation placeholder"}


@router.get("")
def list_institutions() -> dict:
    return {"message": "Institution list placeholder"}
