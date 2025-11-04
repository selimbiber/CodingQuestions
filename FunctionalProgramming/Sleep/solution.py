import asyncio

async def sleep(millis: float) -> None:
    await asyncio.sleep(millis / 1000)