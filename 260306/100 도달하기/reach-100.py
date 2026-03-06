n = int(input())

arr = [1, n]

while True:
    new_val = arr[-1] + arr[-2]
    arr.append(new_val)
    if new_val > 100: break

for i in arr:
    print(i, end = ' ')