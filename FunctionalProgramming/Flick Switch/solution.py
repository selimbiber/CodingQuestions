def flickSwitch(arr):
    flag = True
    result = []
    
    for item in arr:
        if item == "flick":
            flag = not flag
        result.append(flag)
    return result