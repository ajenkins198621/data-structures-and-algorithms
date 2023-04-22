# Data Structures & Algorithms
Practice using Data Structures and Algorithms

As a "self-taught" developer transitioning into engineer, I never had the opportunity to learn about data structures and algorithms in a formal setting. I have been working on my own to learn about them and practice using them. This repository is a collection of my work.

## Data Structures

### Arrays

- Algorithms
    - Linear Search - very basic! O(n)
    - Is it ordered?
        - Binary Search - O(log n)
            - Cut in half each time

- Strategies:
    - Two pointers
    - Sliding Windows
        - Two Pointers
        - Subarrays aka windows
        - Usually the window/subarray is "better" (shorter length, longer sum, etc)

 - Other Algorithms:
    - Two glass balls O(sqrt(n))
        - Jump square root until it breaks
        - and a building with N floors. Find the floor where the glass balls will break.
            - https://sites.google.com/site/mytechnicalcollection/algorithms/dynamic-programming/two-glass-balls

### Sorting Algorithms

#### Bubble Sort
- O(n^2)
- Compare each item to the next item
- If the next item is smaller, swap them
- Repeat until no swaps are made

### Graphs
A series of nodes/vertices with some amount of connections.

#### Terminology
- adjacency list
    - Hash Map Data Structure
        - In JavaScript, Object with keys as the node and values as an array of connected nodes
        - Example:
            ```js
            {
                A: ['B', 'C'],
                B: ['A', 'D'],
                C: ['A', 'D'],
                D: ['B', 'C', 'E'],
                E: ['D']
            }
            ```
- Depth first traversal
    - Stack Data Structure
    - Can be iterative or recursive
- Breadth first traversal
    - Queue Data Structure
    - Can only be iterative
- cyclic
    - has a loop
    - beware of infinite loops
- acyclic
    - no loops
- directed
    - has arrows
    - edges are unidirectional
- undirected
    - no arrows
    - edges are bidirectional
    - convert the edges array to a graph (adjacency list)
- weighted
    - has values
- unweighted
    - no values