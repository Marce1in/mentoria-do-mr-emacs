       IDENTIFICATION DIVISION.
       PROGRAM-ID. idade.
       AUTHOR. Marcelindo.
       DATE-WRITTEN. 05/10/2024.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 idade PIC 999 VALUE ZERO.

       PROCEDURE DIVISION.
       DISPLAY "Digite sua idade: " WITH NO ADVANCING
       ACCEPT idade
       IF idade > 21 THEN
           DISPLAY "Permitido"
       ELSE
           DISPLAY "BANIDO"
       END-IF

       STOP RUN.
