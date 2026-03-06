n = int(input())

nums = list(map(int, input().split()))

nums_new = [i ** 2 for i in nums]

for i in nums_new:
    print(i, end = ' ')