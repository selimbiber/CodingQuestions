class Solution:
    def convertDateToBinary(self, date: str) -> str:
        dateItems: List[str] = date.split('-')
        
        year: int = int(dateItems[0])  
        month: int = int(dateItems[1]) 
        day: int = int(dateItems[2]) 

        year_binary: str = bin(year)[2:]
        month_binary: str = bin(month)[2:]
        day_binary: str = bin(day)[2:]

        return f"{year_binary}-{month_binary}-{day_binary}"