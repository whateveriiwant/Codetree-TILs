arr = list(map(int, input().split()))

idx = 0
for i in range(len(arr)):
    if (arr[i] == 0): break
    idx += 1

for i in range(idx - 1, -1, -1):
	print(arr[i], end=" ")