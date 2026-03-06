arr = list(map(int, input().split()))
pp = arr[0]
p = arr[1]

print(pp, p, end = ' ')

for _ in range(8):
    next_val = (pp + p) % 10
    print(next_val, end = ' ')
    pp, p = p, next_val