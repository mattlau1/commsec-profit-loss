import subprocess
import os


def calc():
    if os.path.exists("ConfirmationDetails.csv") == False:
        print("ConfirmationDetails.csv doesn't exist in directory.")
        exit()

    total = 0
    pf = float(input("Portfolio Market Value: $"))
    subprocess.check_output(
        "cat ConfirmationDetails.csv | cut -d',' -f4,9 > temp.txt", shell=True
    )
    with open('temp.txt', 'r') as f:
        for line in f:
            order = line.rstrip().split(',')
            print(order)
            if order[0] == 'S':
                total += float(order[1])
            elif order[0] == 'B':
                total -= float(order[1])
    os.remove("temp.txt")
    print(total)
    return f'${round(total + pf, 2)}'


if __name__ == "__main__":
    print(f'Total Profit/Loss: {calc()}')
