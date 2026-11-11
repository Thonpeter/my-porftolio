---
title: "Understanding Pointer Mechanics and Memory in C/C++"
date: "2026-03-02"
summary: "A foundational lecture guide for secondary and undergraduate computer science students on how memory allocation, pointers, and stack vs. heap work under the hood."
readTime: "6 min read"
tags: ["Teaching", "C++", "Computer Science", "Algorithms"]
---

One of the steepest hurdles my students encounter when transitioning from introductory block coding or high-level scripting to systems programming is **pointers and manual memory management**.

To make memory concrete, we move away from abstract definitions and picture memory as a giant indexed array of 1-byte storage lockers, each possessing a permanent numeric address.

## The Mental Model: Address vs. Value

Every variable in C or C++ occupies physical memory space:

1. **The Address (`&var`)**: Where the box lives in RAM.
2. **The Value (`var`)**: What is stored inside that box.
3. **The Pointer (`*ptr`)**: A variable whose sole purpose is to store another variable's address.

Here is the exact code pattern we walk through in class:

```cpp
#include <iostream>

int main() {
    int studentScore = 95;
    int* ptrToScore = &studentScore;

    std::cout << "Score Value: " << studentScore << std::endl;
    std::cout << "Memory Address: " << ptrToScore << std::endl;
    
    // Dereferencing to modify the value remotely:
    *ptrToScore = 100;
    std::cout << "Updated Score: " << studentScore << std::endl;

    return 0;
}
```

## Stack vs. Heap Allocation

Why do we need pointers at all if local variables work?

- **The Stack**: Fast, automatic allocation, but strictly limited by scope and size. As soon as a function finishes, its stack frame vanishes.
- **The Heap**: Dynamic memory that lives until you explicitly destroy it. Essential for dynamic structures like linked lists, trees, and graphs.

```cpp
// Stack allocation:
int localScore = 90; 

// Dynamic heap allocation:
int* dynamicScore = new int(90);

// Crucial: Always return memory back to the operating system
delete dynamicScore;
dynamicScore = nullptr;
```

## Discussion Questions for Students

Review these prompts and post your solutions in the discussion section below:

1. What happens if you dereference a `nullptr` in modern OS architectures?
2. Why is memory leak dangerous in long-running services (like servers) compared to short scripts?
3. What is the difference between passing an argument by pointer versus passing by reference in C++?

