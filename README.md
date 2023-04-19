# Data Structures & Algorithms
Practice using Data Structures and Algorithms

As a "self-taught" developer, I never had the opportunity to learn about data structures and algorithms in a formal setting. I have been working on my own to learn about them and practice using them. This repository is a collection of my work.

## Data Structures

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
- cyclic
   - has a loop
- acyclic
    - no loops
- directed
   - has arrows
- undirected
   - no arrows
- weighted
    - has values
- unweighted
    - no values