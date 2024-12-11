       IDENTIFICATION DIVISION.
       PROGRAM-ID. idade.
       AUTHOR. Marcelindo.
       DATE-WRITTEN. 05/10/2024.

       DATA DIVISION.
       FILE SECTION.
       WORKING-STORAGE SECTION.
       01 idade PIC 999 VALUE ZEROS.

       PROCEDURE DIVISION.
       DISPLAY "Digite sua idade: " WITH NO ADVANCING
       ACCEPT idade
       DISPLAY "Sua idade: " idade

       STOP RUN.
