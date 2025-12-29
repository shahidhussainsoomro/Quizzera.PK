from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings
from app.routers import (
    admin,
    analytics,
    auth,
    billing,
    exam,
    institution,
    mcq,
    student,
    teacher,
)

settings = get_settings()

app = FastAPI(title=settings.app_name)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix=settings.api_prefix)
app.include_router(admin.router, prefix=settings.api_prefix)
app.include_router(mcq.router, prefix=settings.api_prefix)
app.include_router(exam.router, prefix=settings.api_prefix)
app.include_router(analytics.router, prefix=settings.api_prefix)
app.include_router(institution.router, prefix=settings.api_prefix)
app.include_router(billing.router, prefix=settings.api_prefix)
app.include_router(teacher.router, prefix=settings.api_prefix)
app.include_router(student.router, prefix=settings.api_prefix)


@app.get("/")
def root() -> dict:
    return {"message": "Quizzera API"}
