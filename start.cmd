@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================================
echo   Demandly Storytelling Business Dashboard ^& BI Canvas
echo   วิชา Business Idea Creation ^& Data Warehouse
echo ========================================================
echo.
echo กำลังเปิด Dashboard บนเว็บเบราว์เซอร์...
start "" "index.html"
echo.
echo เปิด Web Dashboard เรียบร้อยแล้ว!
echo (หรือสามารถรันผ่าน Local HTTP Server ด้วย: python -m http.server 3000)
echo.
pause
