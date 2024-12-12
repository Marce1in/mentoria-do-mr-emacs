from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def get_root() -> str:


    return 



# if __name__ == "__main__":
#     main()
