def binary_search(items, item):
    low = 0
    high = len(items)

    while(low <= high):
        mid = (low + high) // 2
        guess = items[mid]
        if(guess == item):
            return mid
        if(guess > item):
            high = mid -1
        if(guess < item):
            low = mid + 1
    return 'Not Found'

result = binary_search([0,1,2,3,4,5,6,7,8,9], 7)

print(f"Result: {result}")