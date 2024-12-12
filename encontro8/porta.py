from random import randint
from threading import Thread
from itertools import repeat

mantain_door_win = 0
change_door_win = 0
random_door_win = 0

def main():
    simulation_num = int(input("Type how many times the simulation will run: "))

    t1 = Thread(target=door_game, args=[simulation_num, mantain_door])
    t2 = Thread(target=door_game, args=[simulation_num, change_door])
    t3 = Thread(target=door_game, args=[simulation_num, random_door])

    t1.start()
    t2.start()
    t3.start()

    t1.join()
    t2.join()
    t3.join()

    print(f"Mantain: {mantain_door_win} wins - {(mantain_door_win / simulation_num) * 100:.2f}%")
    print(f"Change:  {change_door_win} wins - {(change_door_win / simulation_num) * 100:.2f}%")
    print(f"Random:  {random_door_win} wins - {(random_door_win / simulation_num) * 100:.2f}%")

def door_game(simulation_num, strategy):

    for _ in repeat(None, simulation_num):

        win_door  = randint(1,3)
        chosen_door = randint(1,3)
        goat_door = next(door for door in (1,2,3) if door != win_door and door != chosen_door)

        strategy(chosen_door, goat_door, win_door)


def mantain_door(chosen_door, _, win_door):
    global mantain_door_win

    if chosen_door == win_door:
        mantain_door_win += 1


def change_door(chosen_door, goat_door, win_door):
    global change_door_win

    new_door = next(door for door in (1,2,3) if door != goat_door and door != chosen_door)

    if new_door == win_door:
        change_door_win += 1

def random_door(chosen_door, goat_door, win_door):
    global random_door_win


    if randint(0,1):
        definitive_door = chosen_door
    else:
        definitive_door = next(door for door in (1,2,3) if door != goat_door and door != chosen_door)

    if definitive_door == win_door:
        random_door_win += 1


main()
