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
    - Prefix sum O(1)
        - Integer arrays
        - Sum of all elements up to a certain index

 - Other Algorithms:
    - Two glass balls O(sqrt(n))
        - Jump square root until it breaks
        - and a building with N floors. Find the floor where the glass balls will break.
            - https://sites.google.com/site/mytechnicalcollection/algorithms/dynamic-programming/two-glass-balls

### Linked Lists
    - Single Linked List
        - Head
        - Tail
        - Node
            - Value
            - Next
    - Doubly Linked List
        - Head
        - Tail
        - Node
            - Value
            - Next
            - Previous
    - Time Complexity for linked list:
        - Insertion: O(1)
        - Removal: O(1) or O(n)
        - Searching: O(n)
        - Access: O(n)


### Queue
    - FIFO
    - Enqueue
    - Dequeue
    - Peek

### Stack
    - LIFO
    - Push
    - Pop
    - Peek

### Hashing
    - Hash Table
        - Hash Function
        - Collisions
            - Separate Chaining
            - Linear Probing
    - Hash Set (new Set())
        - Hash Function
        - Collisions
            - Separate Chaining
            - Linear Probing
    - Hash Map (new Map())
        - Hash Function
        - Collisions
            - Separate Chaining
            - Linear Probing        

### Counting


### Arrays vs Linked Lists
    - Arrays
        - Fast lookups
        - Slow inserts
        - Slow deletes
        - Fixed size
        - Better than Linked Lists for Stack
    - Linked Lists
        - Slow lookups
        - Fast inserts
        - Fast deletes
        - Dynamic size
        - Better than Arrays for Queue

### ArrayList
An ArrayList is a dynamic array data structure that can grow or shrink in size as needed. It's similar to a regular Array in JavaScript, but provides more flexibility in terms of resizing and manipulation. 
    - Resizing
        - O(n) time complexity
        - O(n) space complexity
    - Amortization
        - O(1) time complexity
        - O(n) space complexity

### ArrayBuffer or Ring Buffer
A ring buffer is a fixed size array that is treated as if it were connected end-to-end. When the buffer is full, new data is written starting at the beginning of the buffer and overwriting the old.
    - Resizing
        - O(1) time complexity
        - O(1) space complexity
    - Amortization
        - O(1) time complexity
        - O(1) space complexity

### Sorting Algorithms

#### Bubble Sort
- O(n^2)
- Compare each item to the next item
- If the next item is smaller, swap them
- Repeat until no swaps are made

#### Quick Sort
- Divide and conquer
- O(n log n) best case and average case, O(n^2) worst case
- Pick a pivot
- Move all items smaller than the pivot to the left
- Move all items larger than the pivot to the right
- Repeat on the left and right sides
- Low and high pointers
- Usually split into two functions
    - Partition - Produces the pivot index and moves items to the left or right of the pivot
    - Quick Sort - Recursively calls itself on the left and right sides


### Trees
### Terminology
- root - the top node in a tree.  The most parent node.
- height - the number of edges from the root to the bottommost node.  The number of levels in a tree. One strand can be longer than all the others.
- binary tree - a tree where each node has at most two children.  Very common.  Has left and right children.
- binary search tree - a binary tree where each node's left child is less than the parent and each node's right child is greater than the parent.  Not a weak ordering
- general tree - a tree where each node can have any number of children.  One to many.
- leaf - a node with no children
- balanced tree - a tree where the height of the left and right subtrees of any node differ by at most one.  The height of the tree is O(log n).
- unbalanced tree - a tree where the height of the left and right subtrees of any node differ by more than one.  The height of the tree is O(n).
- branching factor - the number of children a node has

- edge - the connection between two nodes
- path - a sequence of nodes and edges connecting a node with a descendant
- ancestor - a node on the path from the root to a node
- descendant - a node on the path from a node to a leaf
- subtree - a tree whose nodes are descendants of another node

#### Traverse a Tree

- Visit Node
- Traverse Left
- Traverse Right

##### Three Types
- Preorder
    - Visit Node
    - Traverse Left / Recurse Left
    - Traverse Right / Recurse Right
- Inorder
    - Traverse Left / Recurse Left
    - Visit Node
    - Traverse Right / Recurse Right
- Postorder
    - Traverse Left / Recurse Left
    - Traverse Right / Recurse Right
    - Visit Node

- Breadth First Search
    - Queue
    - Iterative
- Depth First Search
    - Stack
    - Recursive or Iterative

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