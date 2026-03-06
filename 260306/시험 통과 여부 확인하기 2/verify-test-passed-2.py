students = int(input())
cnt = 0

for _ in range(students):
    score = sum(list(map(int, input().split())))
    avg = score / 4
    if avg >= 60: 
        print('pass')
        cnt += 1
    else:
        print('fail')

print(cnt)