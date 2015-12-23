# learn-tdd

This repository contains examples of problems resolved applying a [test-driven development](http://martinfowler.com/bliki/TestDrivenDevelopment.html) approach. This is the live demo repository of my TDD class at [Escuela IT](http://escuela.it/). You can find the slides for that class here: [learn tdd](http://slides.com/danieldelacruzcalvo/deck-3).

## Example 1: First approach without TDD

Try to resolve the following problem *without* using TDD:

* Create a piece of code that, given two numbers, returns which one is the greatest

No wonder you are a noob programmer, you should resolve this problem easily without using any test-driven methodology. But, what happens if the requirement gets more complicated?

* Modify the previous piece of code to allow getting the greatest of three given numbers

You only have to handle one more parameter, but the solution is way more complicated. But it can be even whorse:

* Modify the previous piece of code to return the greatest *and the smallest* numbers

Wow! This is heavy metal. I *recommend* you to try to resolve this problem at home. How much time did you invest in your solution? Is it readable and well documented? Will you remember how it works when you revisit it in six months? What would happen if another developer has to debug it? 

Think about these questions and how did you feel while resolving the problem. How are you sure that it works? I guess you built up some kind of proving ground or sandbox in a web page or in the Node.JS console to test your function with some arbitrary values. Am I right?

## Example 1: Second approach with TDD.

In the Real World™ often the requirements are not just as simple. You may receive a requirement more similar to this:

* Given *any* number of possible values, we want to know which one is the greatest and the lowest.

If you tried to resolve the previous step without TDD, you may realize that this is a BIG problem. But *a test-driven development approach will let you resolve this problem in an iterative and incremental manner*. What I did to get to the proposed solution was:

- Write a test to get the greatest of two values
- Write just the code to make it pass
- Refactor the solution to get it as simple as I could
- Write another test to get the greatest of three values
- Write just the code to make it pass. I reused the previous function in this case.
- Refactor the second solution
- Write another test to the generic case, of any number of parameters given
- Write the solution proposed, but with a simple for loop.
- Refactor it with a reduce to the parameters array.

## Example 2:

In this example we have the following problem to resolve:

- Write a function that completes the given URL, which contains the site's name and a random number generated for each request

Random numbers are unpredictable behaviors in our code, that can make our test be unstable. We have to avoid any unpredictability somehow. That's what librearies like [sinon](http://sinonjs.org/) are good at. We've created a function in our `Mathematics` class just to wrap the system's random function. We don't have to test it, since we are not introducing any behavior into it, just wrapping the JavaScript Math function. *And we don't ever test the language*. 

With the `random()` function, we can now create a [test double](http://www.martinfowler.com/bliki/TestDouble.html) with sinon in our test specification. Take a look at the proposed solution and play a little with it. Replace the `random()` function with `Math.random()` just to see the effects of the unpredictability in your test suite.

How would you test a piece of code to avoid using the system's clock? Try it at home :)

## Example 3:

In this example we've seen how to simulate external system calls. We need to do this because an external system is unpredictable as well, and it may introduce latencies in our test suite's execution time. And it has to be fast in order to make the feedback loop as short as possible. Also, we need to isolate our tests as much as we can, so an API we haven't built is not something we want to test.

Take a look at the proposed solution to figure out how we can deal with *async* calls, and how to set up a fake server to respond to any requests in our tested code.

## Questions?

If you have any questions about the given examples, please feel free to open an issue in the repository or propose a Pull Request.


