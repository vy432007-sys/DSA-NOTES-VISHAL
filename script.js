
const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const notesArea = document.querySelector("#notes-area");

// Toggle sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// All lecture notes
const lectures = {
  1: {
    title: "The Link for All Practice Questions",
    content: `
      <section>
        <h2>Practice Questions</h2>
        <p>
          <a
            href="https://docs.google.com/spreadsheets/d/1T5-nGsJ9WNwna44e9WWRD0jlZIT5KxVOGvylcvvVrY8/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Practice Questions
          </a>
        </p>
      </section>
    `
  },

  
  2: {
    title: "Lecture 2 — DSA Patterns: Two Pointer Technique",
    content: `
      <section>
        <h2>1. Introduction to Consistency and Patterns</h2>
        <ul>
          <li>Maintain consistency in learning and practice.</li>
          <li>Focus on improvement rather than views or other metrics.</li>
          <li>Strive for excellence through regular practice.</li>
          <li>Understand DSA patterns to improve problem-solving.</li>
        </ul>
      </section>

      <section>
        <h2>2. DSA Topics vs. Question Patterns</h2>
        <ul>
          <li>Traditional DSA courses teach topics such as arrays and linked lists separately.</li>
          <li>Solving many questions from one topic does not guarantee that you can identify the right algorithm in a new problem.</li>
          <li>Recognizing patterns is essential for choosing an appropriate approach.</li>
          <li>Arrays and linked lists appear in many interview problems.</li>
        </ul>
      </section>

      <section>
        <h2>3. Two Pointer Pattern Explained</h2>
        <p>
          The Two Pointer technique uses two indices or positions
          to traverse an array or linked list efficiently.
        </p>
        <h3>Real-world analogy</h3>
        <p>
          Imagine two people coordinating their movements from
          different floors to meet efficiently. Similarly, two
          pointers can work together to reduce unnecessary
          traversals.
        </p>
      </section>

      <section>
        <h2>4. When to Consider Two Pointers</h2>
        <ul>
          <li>Check whether the problem involves arrays or linked lists.</li>
          <li>Sorted data can make the technique especially useful.</li>
          <li>Consider the problem's requirements before choosing this approach.</li>
          <li>Two pointers are generally less suitable for problems that primarily involve trees, graphs, or dynamic programming.</li>
        </ul>
      </section>

      <section>
        <h2>5. Common Applications</h2>
        <ul>
          <li>Merging arrays and removing duplicates.</li>
          <li>Rearranging array elements, such as grouping 0s, 1s, and 2s.</li>
          <li>Removing duplicates from linked lists.</li>
          <li>Detecting cycles in linked lists.</li>
          <li>Finding pairs, triplets, or quadruplets that satisfy a condition.</li>
        </ul>
      </section>

      <section>
        <h2>6. Flowcharts and Problem-Solving</h2>
        <p>
          Flowcharts help visualize the steps of an algorithm
          and make problem-solving logic easier to follow.
        </p>
        <p>Useful examples include:</p>
        <ul>
          <li>Merging sorted or unsorted arrays.</li>
          <li>Detecting cycles in linked lists.</li>
          <li>Removing duplicates or rearranging elements.</li>
        </ul>
      </section>

      <section>
        <h2>7. Two Pointers vs. Sliding Window</h2>
        <ul>
          <li><strong>Two Pointers:</strong> Often used when two indices work together to find pairs or rearrange data.</li>
          <li><strong>Sliding Window:</strong> Usually maintains a changing range of elements in an array or string.</li>
        </ul>
        <p>
          Learn the Two Pointer technique first, then study
          Sliding Window and how the two approaches differ.
        </p>
      </section>

      <section>
        <h2>8. Using Multiple Indices</h2>
        <p>
          Indices such as i and j can traverse an array
          simultaneously. Two pointers often make the logic
          easier to understand than using three or four indices.
        </p>
      </section>

      <section>
        <h2>9. Key Takeaways</h2>
        <ul>
          <li>Consistency and regular practice matter.</li>
          <li>Learn to recognize patterns instead of memorizing solutions.</li>
          <li>Understand when Two Pointers is appropriate.</li>
          <li>Use flowcharts to understand algorithm steps.</li>
          <li>Distinguish Two Pointers from Sliding Window.</li>
        </ul>
      </section>
    `
  },
  
3: {
  title: "Lecture 3 — Remove Duplicates from Sorted Array",
  content: `
    <section>
      <h2>1. Understand the Problem First</h2>

      <p>We are given a sorted array containing duplicate elements. Our task is to keep only one occurrence of each value, maintain the original order, modify the same array, and return the number of unique elements.</p>

      <pre>Input:  [1, 1, 2, 2, 3, 3]
Output: [1, 2, 3]
Return: 3</pre>

      <p><strong>What does in-place mean?</strong></p>
      <p>It means we modify the original array instead of creating another array to store the answer. We can overwrite positions that previously contained duplicates.</p>

      <p><strong>Important:</strong> We do not need to physically shrink the array. The first k positions must contain the unique elements in order. Values after those positions do not matter.</p>
    </section>

    <section>
      <h2>2. Why Does Sorting Make This Easier?</h2>

      <p>Consider this sorted array:</p>
      <pre>[1, 1, 1, 2, 2, 3, 3]</pre>

      <p>All copies of the same number appear next to one another. Therefore, to determine whether we have found a new unique value, we only need to compare it with the last unique value.</p>

      <p>For example:</p>
      <ul>
        <li>The second 1 is a duplicate of the first 1.</li>
        <li>The third 1 is also a duplicate of the first 1.</li>
        <li>When we reach 2, it differs from 1, so we have found a new unique value.</li>
        <li>When we reach 3, it differs from 2, so we have found another unique value.</li>
      </ul>

      <p><strong>Key idea:</strong> Because the array is sorted, we do not need to compare every element with every other element.</p>
    </section>

    <section>
      <h2>3. The Main Idea: Two Pointers</h2>

      <p>We use two indices, i and j, because they have two different responsibilities.</p>

      <h3>Pointer i — Where to Write</h3>
      <p>Pointer i points to the position of the last unique element we have kept. It also tells us where the next unique element should be written after we increment it.</p>

      <h3>Pointer j — What to Check</h3>
      <p>Pointer j moves through the array to search for the next unique element. It checks every element from left to right.</p>

      <p>Imagine j as a reader scanning the array and i as a writer organizing the unique elements at the beginning.</p>

      <pre>Original: [1, 1, 2, 2, 3, 3]
             i  j

i = 0  -> last unique element is 1
j = 1  -> checks the next element, which is 1</pre>

      <p>Initially, the first element is already unique, so we set i = 0. We start j = 1 because the first element does not need to be compared with itself.</p>
    </section>

    <section>
      <h2>4. What Happens in Each Case?</h2>

      <h3>Case A: nums[i] == nums[j]</h3>
      <p>The current element is equal to the last unique element. Since the array is sorted, it is a duplicate.</p>

      <pre>[1, 1, 2, 2, 3, 3]
 i  j</pre>

      <p>We do not need to copy anything. We simply move j forward to check the next element.</p>

      <p><strong>Why not move i?</strong> Because we have not found a new unique value. The last unique value is still 1.</p>

      <h3>Case B: nums[i] != nums[j]</h3>
      <p>The current element is different from the last unique element. Therefore, we have found a new unique value.</p>

      <pre>Before: [1, 1, 2, 2, 3, 3]
             i     j

After:  [1, 2, 2, 2, 3, 3]
                i</pre>

      <p>We increment i to create the next position for a unique element, then write nums[j] at that position.</p>

      <p>Finally, we increment j so it can continue scanning.</p>

      <p><strong>Remember:</strong> i moves only when a new unique value is found. j moves during every iteration.</p>
    </section>

    <section>
      <h2>5. C++ Code Using while Loop</h2>

      <pre><code>int removeDuplicates(vector&lt;int&gt;&amp; nums) {
    if (nums.empty()) return 0;

    int i = 0;
    int j = 1;

    while (j &lt; nums.size()) {
        if (nums[i] == nums[j]) {
            j++;
        }
        else {
            i++;
            nums[i] = nums[j];
            j++;
        }
    }

    return i + 1;
}</code></pre>

      <p><strong>Understand these lines:</strong></p>
      <ul>
        <li><code>if (nums.empty()) return 0;</code> handles an array with no elements.</li>
        <li><code>int i = 0;</code> assumes the first element is the first unique value.</li>
        <li><code>int j = 1;</code> starts checking from the second element.</li>
        <li><code>while (j &lt; nums.size())</code> ensures j never goes beyond the array.</li>
        <li><code>i++;</code> creates a position for the next unique value.</li>
        <li><code>nums[i] = nums[j];</code> places that unique value at the beginning portion of the array.</li>
        <li><code>return i + 1;</code> returns the count of unique elements.</li>
      </ul>
    </section>

    <section>
      <h2>6. Dry Run — Understand Every Movement</h2>

      <p><strong>Input:</strong></p>
      <pre>nums = [1, 1, 2, 2, 3, 3]</pre>

      <p>Initially: i = 0, j = 1.</p>

      <h3>Step 1: Compare 1 and 1</h3>
      <pre>nums[i] == nums[j]
1 == 1  -> duplicate</pre>
      <p>Move j forward. i stays at 0 because we have not found a new unique value.</p>
      <pre>i = 0, j = 2
[1, 1, 2, 2, 3, 3]</pre>

      <h3>Step 2: Compare 1 and 2</h3>
      <pre>nums[i] != nums[j]
1 != 2  -> new unique value</pre>
      <p>Increment i from 0 to 1. Copy nums[2], which is 2, into nums[1]. Then increment j.</p>
      <pre>i = 1, j = 3
[1, 2, 2, 2, 3, 3]</pre>

      <h3>Step 3: Compare 2 and 2</h3>
      <pre>nums[i] == nums[j]
2 == 2  -> duplicate</pre>
      <p>Move j forward. i stays at 1.</p>
      <pre>i = 1, j = 4
[1, 2, 2, 2, 3, 3]</pre>

      <h3>Step 4: Compare 2 and 3</h3>
      <pre>nums[i] != nums[j]
2 != 3  -> new unique value</pre>
      <p>Increment i from 1 to 2. Copy nums[4], which is 3, into nums[2]. Then increment j.</p>
      <pre>i = 2, j = 5
[1, 2, 3, 2, 3, 3]</pre>

      <h3>Step 5: Compare 3 and 3</h3>
      <pre>nums[i] == nums[j]
3 == 3  -> duplicate</pre>
      <p>Move j forward.</p>
      <pre>i = 2, j = 6
[1, 2, 3, 2, 3, 3]</pre>

      <p>Now j = 6 and the array size is 6. The condition j &lt; nums.size() is false, so the loop stops.</p>

      <h3>Dry Run Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Comparison</th>
            <th>Decision</th>
            <th>i after step</th>
            <th>j after step</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 and 1</td>
            <td>Duplicate</td>
            <td>0</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1 and 2</td>
            <td>New unique</td>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2 and 2</td>
            <td>Duplicate</td>
            <td>1</td>
            <td>4</td>
          </tr>
          <tr>
            <td>2 and 3</td>
            <td>New unique</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>3 and 3</td>
            <td>Duplicate</td>
            <td>2</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Final count:</strong> i + 1 = 2 + 1 = 3.</p>
      <p><strong>First three elements:</strong> [1, 2, 3].</p>
    </section>

    <section>
      <h2>7. Why Do We Return i + 1?</h2>

      <p>Suppose the unique elements occupy these positions:</p>
      <pre>Index:   0  1  2
Value:   1  2  3</pre>

      <p>The last unique element is at index 2, but there are three unique elements. Since indexing starts from 0, the count is index + 1.</p>

      <p>Therefore, we return i + 1, not i.</p>
    </section>

    <section>
      <h2>8. Why Is the Algorithm Efficient?</h2>

      <p><strong>Time Complexity: O(n)</strong></p>
      <p>Pointer j moves forward through the array and visits each element once. We do not repeatedly compare every pair.</p>

      <p><strong>Extra Space Complexity: O(1)</strong></p>
      <p>We only use two integer variables, i and j. We do not create another array.</p>

      <p>This is why the two-pointer solution is efficient for a sorted array.</p>
    </section>

    <section>
      <h2>9. LeetCode Practice — Start Here</h2>

      <h3>Problem 1: Remove Duplicates from Sorted Array</h3>
      <p><strong>LeetCode 26 — Easy</strong></p>
      <p>This is the exact problem explained in this lecture. Solve it yourself using the two-pointer approach and the while loop before looking at the solution.</p>
      <p><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/" target="_blank" rel="noopener noreferrer">Open LeetCode Problem 26</a></p>

      <h3>Problem 2: Remove Element</h3>
      <p><strong>LeetCode 27 — Easy</strong></p>
      <p>Use two pointers to keep the elements that are not equal to a given value. This strengthens your understanding of writing selected elements into the beginning of an array.</p>
      <p><a href="https://leetcode.com/problems/remove-element/" target="_blank" rel="noopener noreferrer">Open LeetCode Problem 27</a></p>

      <h3>Problem 3: Move Zeroes</h3>
      <p><strong>LeetCode 283 — Easy</strong></p>
      <p>Move all zeroes to the end while maintaining the relative order of non-zero elements. This gives you more practice with scanning and writing pointers.</p>
      <p><a href="https://leetcode.com/problems/move-zeroes/" target="_blank" rel="noopener noreferrer">Open LeetCode Problem 283</a></p>

      <h3>Recommended Order</h3>
      <ol>
        <li>Solve Problem 26 without looking at the code.</li>
        <li>Dry run your solution on [0, 0, 1, 1, 2].</li>
        <li>Solve Problem 27 to practise the same idea in a slightly different situation.</li>
        <li>Try Problem 283 once you understand how the write pointer works.</li>
      </ol>
    </section>

    <section>
      <h2>10. Test Your Understanding</h2>

      <ol>
        <li>Why can we compare adjacent values instead of checking the entire array?</li>
        <li>Why does j move when a duplicate is found, but i does not?</li>
        <li>What does nums[i] = nums[j] accomplish?</li>
        <li>Why is the answer i + 1?</li>
        <li>What should the function return for an empty array?</li>
        <li>What are the time and extra space complexities?</li>
      </ol>
    </section>
  `
},

4: {
  title: "Lecture 4 — Squares of a Sorted Array",
  content: `
    <section>
      <h2>1. Problem: Squares of a Sorted Array</h2>

      <p><strong>LeetCode 977:</strong>
        <a href="https://leetcode.com/problems/squares-of-a-sorted-array/" target="_blank" rel="noopener noreferrer">
          Squares of a Sorted Array
        </a>
      </p>

      <p><strong>Problem statement:</strong> Given an integer array nums sorted in non-decreasing order, return an array containing the square of every number, also sorted in non-decreasing order.</p>

      <p><strong>Example:</strong></p>
      <pre><code>Input:  [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]</code></pre>

      <h3>Why is this problem tricky?</h3>
      <p>The original array is sorted, but squaring its elements does not necessarily preserve the order.</p>

      <pre><code>Original:  [-4, -1, 0, 3, 10]
Squared:   [16, 1, 0, 9, 100]</code></pre>

      <p>Negative numbers become positive after squaring. A number with a large negative value can produce a larger square than a positive number.</p>

      <p>For example, (-4)² = 16, while 3² = 9. Therefore, we cannot simply square every element and assume the result is sorted.</p>

      <h3>Key observation</h3>
      <ul>
        <li>The input array is already sorted.</li>
        <li>The largest square must come from either the first element or the last element.</li>
        <li>This observation allows us to use two pointers instead of sorting the result again.</li>
      </ul>
    </section>

    <section>
      <h2>2. Approach 1: Brute Force + Sorting</h2>

      <h3>Idea</h3>
      <p>The simplest approach is to square every element and then sort the resulting array.</p>

      <h3>Steps</h3>
      <ol>
        <li>Square every element in the array.</li>
        <li>Sort the squared values using sort().</li>
        <li>Return the array.</li>
      </ol>

      <h3>C++ code</h3>
      <pre><code>class Solution {
public:
    vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; nums) {
        int n = nums.size();

        for (int i = 0; i &lt; n; i++) {
            nums[i] = nums[i] * nums[i];
        }

        sort(nums.begin(), nums.end());

        return nums;
    }
};</code></pre>

      <h3>Example</h3>
      <pre><code>Original:  [-4, -1, 0, 3, 10]
After square:
           [16, 1, 0, 9, 100]

After sort:
           [0, 1, 9, 16, 100]</code></pre>

      <h3>Complexity</h3>
      <ul>
        <li><strong>Time: O(n log n)</strong> — squaring takes O(n), and sorting takes O(n log n). Sorting dominates.</li>
        <li><strong>Extra space:</strong> Depends on the sorting implementation. The code modifies the input array and does not create another result array.</li>
      </ul>

      <p><strong>Limitation:</strong> This approach works, but it does not use the fact that the input is already sorted. The follow-up asks whether we can solve the problem in O(n) time.</p>
    </section>

    <section>
      <h2>3. Approach 2: Separate Negative and Non-Negative Numbers, Then Merge</h2>

      <h3>Idea</h3>
      <p>Separate the negative numbers from the zero and positive numbers. Square both groups, arrange each group in ascending order, and merge them.</p>

      <h3>Steps</h3>
      <ol>
        <li>Store negative numbers in one array and zero or positive numbers in another.</li>
        <li>Square the values in both arrays.</li>
        <li>The squared positive group is already sorted. Reverse the squared negative group because its squares are in descending order.</li>
        <li>Merge the two sorted groups by repeatedly choosing the smaller value.</li>
      </ol>

      <h3>Example</h3>
      <pre><code>Input: [-4, -1, 0, 3, 10]

Negative numbers: [-4, -1]
After squaring:   [16, 1]
After reversing:  [1, 16]

Non-negative:     [0, 3, 10]
After squaring:   [0, 9, 100]

Merge:
[0, 1, 9, 16, 100]</code></pre>

      <h3>How does merging work?</h3>
      <p>Compare the first unused value in each sorted group. Add the smaller one to the result and advance that group's pointer. Continue until both groups are processed.</p>

      <p><strong>Complexity:</strong></p>
      <ul>
        <li><strong>Time: O(n)</strong> — separating, squaring, reversing, and merging take linear time overall.</li>
        <li><strong>Extra space: O(n)</strong> — the separate groups and merged result require additional storage.</li>
      </ul>

      <p>This is more efficient than sorting everything, but we can avoid explicitly separating the numbers by using the two ends of the original array.</p>
    </section>

    <section>
      <h2>4. Approach 3: Optimal Two-Pointer Solution</h2>

      <h3>Main idea</h3>
      <p>Because the array is sorted, the element with the largest absolute value must be at one of its two ends.</p>

      <p>For example:</p>
      <pre><code>nums = [-4, -1, 0, 3, 10]

Left end:  -4  → square = 16
Right end: 10  → square = 100</code></pre>

      <p>The larger square is 100, so we place it at the last position of the result array. Then we move the right pointer inward.</p>

      <p>We repeat this process, placing the largest remaining square into the rightmost empty position.</p>

      <h3>Why fill the result from right to left?</h3>
      <p>We can easily identify the <strong>largest</strong> remaining square by comparing the two ends. We cannot always identify the smallest square directly from the ends.</p>

      <p>Therefore, we put the largest square at the end, then the next largest immediately before it, and continue backwards. This produces the final array in ascending order without sorting.</p>

      <h3>Pointer meanings</h3>
      <ul>
        <li><code>i</code> — points to the leftmost unprocessed element.</li>
        <li><code>j</code> — points to the rightmost unprocessed element.</li>
        <li><code>index</code> — tells us where to place the next largest square in the result array.</li>
        <li><code>k</code> — stores the square of the left element.</li>
        <li><code>m</code> — stores the square of the right element.</li>
      </ul>

      <h3>Algorithm</h3>
      <ol>
        <li>Initialize <code>i = 0</code> and <code>j = n - 1</code>.</li>
        <li>Create a result array of size <code>n</code> and set <code>index = n - 1</code>.</li>
        <li>While <code>i &lt;= j</code>, calculate the squares of the two end elements.</li>
        <li>If the left square is larger, put it at <code>result[index]</code> and increment <code>i</code>.</li>
        <li>Otherwise, put the right square there and decrement <code>j</code>.</li>
        <li>Decrement <code>index</code> after every placement.</li>
        <li>Return the result array.</li>
      </ol>

      <h3>Your C++ solution</h3>
      <pre><code>class Solution {
public:
    vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; nums) {
        int i = 0;
        int j = nums.size() - 1;

        int n = nums.size();
        vector&lt;int&gt; result(n);
        int index = n - 1;

        while (i &lt;= j) {
            int k = nums[i] * nums[i];
            int m = nums[j] * nums[j];

            if (k &gt; m) {
                result[index] = k;
                i++;
            }
            else {
                result[index] = m;
                j--;
            }

            index--;
        }

        return result;
    }
};</code></pre>

      <p><strong>Important:</strong> The input array remains unchanged because we write the squared values into a separate result array.</p>
    </section>

    <section>
      <h2>5. Dry Run of Your Code</h2>

      <p>Input: <code>nums = [-4, -1, 0, 3, 10]</code></p>
      <p>Initially, <code>i = 0</code>, <code>j = 4</code>, and <code>index = 4</code>.</p>

      <h3>Iteration 1</h3>
      <pre><code>k = (-4)² = 16
m = 10² = 100

k &gt; m? No
result[4] = 100
j = 3
index = 3

result = [_, _, _, _, 100]</code></pre>

      <p>100 is the largest square, so it goes into the last position.</p>

      <h3>Iteration 2</h3>
      <pre><code>i = 0, j = 3

k = (-4)² = 16
m = 3² = 9

k &gt; m? Yes
result[3] = 16
i = 1
index = 2

result = [_, _, _, 16, 100]</code></pre>

      <p>16 is larger than 9, so it goes immediately before 100.</p>

      <h3>Iteration 3</h3>
      <pre><code>i = 1, j = 3

k = (-1)² = 1
m = 3² = 9

k &gt; m? No
result[2] = 9
j = 2
index = 1

result = [_, _, 9, 16, 100]</code></pre>

      <h3>Iteration 4</h3>
      <pre><code>i = 1, j = 2

k = (-1)² = 1
m = 0² = 0

k &gt; m? Yes
result[1] = 1
i = 2
index = 0

result = [_, 1, 9, 16, 100]</code></pre>

      <h3>Iteration 5</h3>
      <pre><code>i = 2, j = 2

k = 0² = 0
m = 0² = 0

k &gt; m? No
result[0] = 0
j = 1
index = -1

result = [0, 1, 9, 16, 100]</code></pre>

      <p>Now <code>i &gt; j</code>, so the loop stops.</p>

      <p><strong>Final answer:</strong></p>
      <pre><code>[0, 1, 9, 16, 100]</code></pre>
    </section>

    <section>
      <h2>6. Why Does the Algorithm Work?</h2>

      <p>At every step, the two pointers identify the elements with the largest possible absolute values among the unprocessed elements.</p>

      <ul>
        <li>Since the input is sorted, the largest absolute value must be at the left or right end.</li>
        <li>Squaring the larger absolute value gives the largest remaining square.</li>
        <li>Placing it at the last empty position ensures that larger values are placed farther to the right.</li>
        <li>Moving the chosen pointer inward removes that element from further consideration.</li>
        <li>Repeating this process fills every position in the correct order.</li>
      </ul>

      <p>Every iteration processes exactly one element, and both pointers move only inward. Therefore, all elements are processed once.</p>
    </section>

    <section>
      <h2>7. Time and Space Complexity</h2>

      <h3>Time complexity: O(n)</h3>
      <p>Each iteration processes one element and moves either <code>i</code> or <code>j</code>. Across the entire loop, each input element is processed once. Thus, the total time is linear.</p>

      <h3>Space complexity: O(n)</h3>
      <p>The result array contains <code>n</code> elements, so it requires O(n) extra space. The pointers and temporary variables require only O(1) space.</p>

      <p><strong>Remember:</strong> The algorithm is O(n) time, but it is not O(1) auxiliary space because the separate result array takes O(n) space. This is the standard approach for LeetCode 977.</p>

      <h3>Comparison of approaches</h3>
      <table>
        <thead>
          <tr>
            <th>Approach</th>
            <th>Time</th>
            <th>Extra space</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Square + sort</td>
            <td>O(n log n)</td>
            <td>Depends on sorting implementation</td>
          </tr>
          <tr>
            <td>Separate + merge</td>
            <td>O(n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Two pointers</td>
            <td>O(n)</td>
            <td>O(n) for result</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>8. Common Mistakes</h2>

      <ul>
        <li><strong>Squaring and returning directly:</strong> The squared array may not be sorted.</li>
        <li><strong>Filling the result from left to right:</strong> The two-pointer comparison identifies the largest square, so fill from the right.</li>
        <li><strong>Comparing the original numbers instead of their absolute values or squares:</strong> For example, -4 is numerically smaller than 3, but its square is larger.</li>
        <li><strong>Forgetting to move a pointer:</strong> This can cause the loop to run forever.</li>
        <li><strong>Forgetting <code>index--</code>:</strong> Each new square must go into the next empty position to the left.</li>
        <li><strong>Using <code>i &lt; j</code> instead of <code>i &lt;= j</code>:</strong> When both pointers meet, one element remains to be processed.</li>
      </ul>

      <p><strong>Integer note:</strong> The usual LeetCode constraints fit the square in a 32-bit integer. In other problems with larger values, use <code>long long</code> to avoid integer overflow.</p>
    </section>

    <section>
      <h2>9. Could We Use a for Loop?</h2>

      <p>Yes. The choice between <code>while</code> and <code>for</code> does not change the algorithm. A <code>while</code> loop is natural here because the pointers move conditionally.</p>

      <pre><code>class Solution {
public:
    vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; nums) {
        int n = nums.size();
        vector&lt;int&gt; result(n);

        int left = 0;
        int right = n - 1;

        for (int index = n - 1; index &gt;= 0; index--) {
            int leftSquare = nums[left] * nums[left];
            int rightSquare = nums[right] * nums[right];

            if (leftSquare &gt; rightSquare) {
                result[index] = leftSquare;
                left++;
            } else {
                result[index] = rightSquare;
                right--;
            }
        }

        return result;
    }
};</code></pre>

      <p>This version runs exactly <code>n</code> iterations, so it does not need the condition <code>left &lt;= right</code>. Both versions use O(n) time and O(n) result space.</p>
    </section>

    <section>
      <h2>10. Two-Pointer Pattern: What to Remember</h2>

      <p>Two pointers are useful when two positions in a sequence help us make progress without repeatedly scanning or sorting the entire data.</p>

      <p>In this problem:</p>
      <ul>
        <li>Both pointers start at opposite ends.</li>
        <li>We compare the candidates at the two ends.</li>
        <li>We decide which pointer to move based on the comparison.</li>
        <li>We use the result array from right to left.</li>
      </ul>

      <p><strong>Pattern recognition question:</strong> Can you use the sorted input to determine the next answer directly, without sorting again?</p>

      <p>Here, the answer is yes: the largest remaining square must be at one of the two ends.</p>
    </section>

    <section>
      <h2>11. Related LeetCode Practice</h2>

      <p>Try these problems to strengthen the two-pointer pattern. The order below starts with similar pointer movement and then moves to other applications.</p>

      <ol>
        <li>
          <a href="https://leetcode.com/problems/squares-of-a-sorted-array/" target="_blank" rel="noopener noreferrer">977. Squares of a Sorted Array</a>
          — Practise the two-pointer solution explained above.
        </li>
        <li>
          <a href="https://leetcode.com/problems/merge-sorted-array/" target="_blank" rel="noopener noreferrer">88. Merge Sorted Array</a>
          — Use pointers to merge sorted values without sorting the entire result.
        </li>
        <li>
          <a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" target="_blank" rel="noopener noreferrer">167. Two Sum II — Input Array Is Sorted</a>
          — Move the left or right pointer based on the current sum.
        </li>
        <li>
          <a href="https://leetcode.com/problems/valid-palindrome/" target="_blank" rel="noopener noreferrer">125. Valid Palindrome</a>
          — Compare characters from opposite ends.
        </li>
        <li>
          <a href="https://leetcode.com/problems/move-zeroes/" target="_blank" rel="noopener noreferrer">283. Move Zeroes</a>
          — Practise maintaining positions with pointers.
        </li>
        <li>
          <a href="https://leetcode.com/problems/container-with-most-water/" target="_blank" rel="noopener noreferrer">11. Container With Most Water</a>
          — Learn when moving one pointer can improve the answer.
        </li>
      </ol>
    </section>

    <section>
      <h2>12. Quick Revision</h2>

      <ul>
        <li><strong>Problem:</strong> Square a sorted array and return the squares in sorted order.</li>
        <li><strong>Brute force:</strong> Square every element, then sort — O(n log n) time.</li>
        <li><strong>Optimized idea:</strong> The largest square comes from one of the two ends.</li>
        <li><strong>Pointers:</strong> Start at index 0 and index n - 1.</li>
        <li><strong>Result:</strong> Fill from index n - 1 down to 0.</li>
        <li><strong>Time:</strong> O(n).</li>
        <li><strong>Extra space:</strong> O(n) for the result array.</li>
        <li><strong>Key lesson:</strong> Use the sorted property to avoid an extra sorting step.</li>
      </ul>

      <p><strong>Lecture scope:</strong> The supplied lecture notes also mention a Product of Array question, but the provided notes cover only part of the video and do not include enough detail to document that problem accurately here.</p>
    </section>
  `
},

5: {
  title: "Lecture 5 — Time Complexity & Big O",
  content: `
    <section>
      <h2>1. Introduction: Why Time Complexity Matters</h2>

      <p>Time complexity helps us understand how an algorithm's running time grows as the input size increases. It helps us choose an efficient solution before running the program on large inputs.</p>

      <h3>What is an online judge?</h3>
      <p>Platforms such as LeetCode and GeeksforGeeks run submitted programs against test cases. A solution must produce the correct answer within the platform's time and memory limits.</p>

      <p><strong>Time Limit Exceeded (TLE):</strong> The program takes longer than the allowed execution time. An algorithm may give correct answers for small inputs but still fail on large ones.</p>

      <h3>What is a simple operation?</h3>
      <p>For introductory analysis, simple operations such as assignments, basic arithmetic, and comparisons are often treated as constant-time operations.</p>

      <pre><code>int a = 5;
int b = 10;
int c = a + b;</code></pre>

      <p>Each line performs a fixed amount of work, independent of the size of an array elsewhere in the program. Such operations are represented as O(1).</p>

      <h3>The 10⁸ operations rule of thumb</h3>
      <p>The video introduces approximately 10⁸ simple operations per second as a rough benchmark for estimating whether a solution may be feasible.</p>

      <p><strong>Important:</strong> This is an estimate, not a universal guarantee. Actual execution time depends on the hardware, language, operation type, implementation, and judge limits. Always use complexity as a guide rather than an exact stopwatch.</p>
    </section>

    <section>
      <h2>2. Input Size and Feasible Complexities</h2>

      <p>In coding problems, the constraints often tell us the maximum input size, usually represented by <code>n</code>. The larger <code>n</code> becomes, the more important the algorithm's growth rate is.</p>

      <p>For an introductory estimate, assume a budget of roughly 10⁸ simple operations. The table below compares common growth rates. These counts are illustrative growth estimates, not exact execution times.</p>

      <table>
        <thead>
          <tr>
            <th>Input size n</th>
            <th>O(n)</th>
            <th>O(n log₂ n)</th>
            <th>O(n²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>10</td>
            <td>~33</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1,000</td>
            <td>1,000</td>
            <td>~10,000</td>
            <td>1,000,000</td>
          </tr>
          <tr>
            <td>100,000</td>
            <td>100,000</td>
            <td>~1,660,000</td>
            <td>10,000,000,000</td>
          </tr>
          <tr>
            <td>100,000,000</td>
            <td>100,000,000</td>
            <td>~2,660,000,000</td>
            <td>10¹⁶</td>
          </tr>
        </tbody>
      </table>

      <h3>Case 1: n = 10</h3>
      <p>Even O(n³) involves only about 1,000 iterations under a simple cubic-loop model. Many approaches are feasible for such a small input, although constraints and constants still matter.</p>

      <h3>Case 2: n = 1,000</h3>
      <p>O(n²) means roughly 10⁶ operations, which is often manageable. O(n³) means roughly 10⁹ operations, which is usually too expensive for a typical short time limit.</p>

      <h3>Case 3: n = 10⁵</h3>
      <p>O(n log n) is often practical. O(n²) means around 10¹⁰ operations under a quadratic model, which is generally too much.</p>

      <h3>Case 4: n = 10⁸</h3>
      <p>An O(n) algorithm already performs work proportional to 10⁸. O(n log n) can be substantially larger, so a near-linear or more efficient solution may be necessary.</p>

      <h3>Case 5: n = 10⁹</h3>
      <p>A linear scan of a billion elements is generally expensive under ordinary time limits. An O(log n) algorithm takes only about 30 iterations when the input is repeatedly halved.</p>

      <p><strong>Remember:</strong> These are guidelines, not strict rules. The correct choice depends on the actual constraints, allowed time, memory, and operations.</p>
    </section>

    <section>
      <h2>3. What Does Big O Mean?</h2>

      <p>Big O notation describes an upper bound on how an algorithm's resource usage grows as input size increases. In introductory DSA, it is commonly used to describe the growth rate of running time.</p>

      <p>It focuses on growth rather than the exact number of seconds taken by a particular computer.</p>

      <h3>O(1) — Constant time</h3>
      <pre><code>int getFirst(vector&lt;int&gt;&amp; nums) {
    return nums[0];
}</code></pre>

      <p>Accessing the first element of a vector by index takes constant time. The operation does not need to examine every element.</p>

      <p>Whether the vector contains 10 elements or 1,000,000 elements, this particular access takes a constant amount of work.</p>

      <p><strong>O(1) does not mean exactly one second or exactly one operation.</strong> It means the work is bounded independently of the input size.</p>

      <h3>O(log n) — Logarithmic time</h3>
      <pre><code>int countHalvings(int n) {
    int steps = 0;

    while (n &gt; 1) {
        n /= 2;
        steps++;
    }

    return steps;
}</code></pre>

      <p>Each iteration halves the value of <code>n</code>. After one iteration it is approximately n/2; after two it is approximately n/4.</p>

      <p>After k iterations, the value is approximately n/2ᵏ. We stop when it reaches 1, so 2ᵏ is approximately n, giving k ≈ log₂ n.</p>

      <p>For n = 16: 16 → 8 → 4 → 2 → 1. There are four iterations, and log₂ 16 = 4.</p>

      <h3>O(n) — Linear time</h3>
      <pre><code>void printAll(vector&lt;int&gt;&amp; nums) {
    for (int i = 0; i &lt; nums.size(); i++) {
        cout &lt;&lt; nums[i] &lt;&lt; " ";
    }
}</code></pre>

      <p>The loop processes every element once. If the number of elements doubles, the number of iterations also doubles.</p>

      <h3>O(n²) — Quadratic time</h3>
      <pre><code>void printAllPairs(vector&lt;int&gt;&amp; nums) {
    int n = nums.size();

    for (int i = 0; i &lt; n; i++) {
        for (int j = 0; j &lt; n; j++) {
            cout &lt;&lt; nums[i] &lt;&lt; ", " &lt;&lt; nums[j] &lt;&lt; "\\n";
        }
    }
}</code></pre>

      <p>The outer loop runs n times, and for each outer iteration the inner loop also runs n times. Total iterations = n × n = n².</p>

      <h3>O(n³) — Cubic time</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; n; j++) {
        for (int k = 0; k &lt; n; k++) {
            // Constant-time work
        }
    }
}</code></pre>

      <p>There are three independent loops, each running n times. Total iterations = n × n × n = n³.</p>
    </section>

    <section>
      <h2>4. The Common Complexity Growth Order</h2>

      <p>For large inputs, these common growth rates are ordered from slower growth to faster growth:</p>

      <ol>
        <li>O(1) — constant</li>
        <li>O(log n) — logarithmic</li>
        <li>O(n) — linear</li>
        <li>O(n log n) — linearithmic</li>
        <li>O(n²) — quadratic</li>
        <li>O(n³) — cubic</li>
        <li>O(2ⁿ) — exponential</li>
        <li>O(n!) — factorial</li>
      </ol>

      <p>For example, an O(n log n) sorting algorithm generally scales much better than an O(n²) sorting algorithm when n becomes large.</p>

      <p>This ordering describes asymptotic growth for sufficiently large n; actual running time for small inputs also depends on constant factors and implementation details.</p>
    </section>

    <section>
      <h2>5. Rule: Combine Sequential Code Blocks</h2>

      <p>When code blocks execute one after another, add their work estimates. For Big O, keep the term that grows fastest.</p>

      <h3>Example 1: Two separate loops</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    // O(1) work
}

for (int j = 0; j &lt; n; j++) {
    // O(1) work
}</code></pre>

      <p>The first loop takes O(n), and the second loop takes O(n).</p>

      <p>Total work = O(n) + O(n) = O(2n) = <strong>O(n)</strong>.</p>

      <p>We drop the constant factor 2 because Big O focuses on growth rate.</p>

      <h3>Example 2: A loop followed by a nested loop</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    // O(1) work
}

for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; n; j++) {
        // O(1) work
    }
}</code></pre>

      <p>The first block is O(n), and the second is O(n²).</p>

      <p>Total = O(n) + O(n²) = <strong>O(n²)</strong>.</p>

      <p>The quadratic term grows faster and dominates for large n.</p>

      <h3>Important correction to remember</h3>
      <p>The video describes taking the maximum complexity among independent sections. This is a useful shortcut for sequential blocks after accounting for their work: add the blocks, then retain the dominant growth rate. Do not apply the shortcut blindly to mutually dependent or input-dependent code without analysing the actual execution.</p>
    </section>

    <section>
      <h2>6. Fixed Loops vs Input-Dependent Loops</h2>

      <h3>Fixed upper bound: O(1)</h3>
      <pre><code>for (int i = 0; i &lt; 100; i++) {
    cout &lt;&lt; i &lt;&lt; " ";
}</code></pre>

      <p>This loop runs 100 times regardless of the input size n. Since 100 is a fixed constant, its complexity with respect to n is O(1).</p>

      <h3>Loop running n times: O(n)</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    cout &lt;&lt; i &lt;&lt; " ";
}</code></pre>

      <p>The number of iterations depends on n, so the complexity is O(n).</p>

      <h3>Loop running n - 1 times: O(n)</h3>
      <pre><code>for (int i = 0; i &lt; n - 1; i++) {
    // O(1) work
}</code></pre>

      <p>The loop runs n - 1 times, giving O(n - 1). After dropping the constant term, the result is O(n).</p>

      <h3>Two loops with different bounds</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    // O(1) work
}

for (int j = 0; j &lt; 500; j++) {
    // O(1) work
}</code></pre>

      <p>The first loop is O(n), while the second is O(1). The combined complexity is O(n) + O(1) = O(n).</p>
    </section>

    <section>
      <h2>7. Simplifying Expressions in Big O</h2>

      <p>Three common rules help simplify a time-complexity expression.</p>

      <h3>Rule 1: Drop constant multipliers</h3>
      <p>O(5n) = O(n)</p>
      <p>O(100n) = O(n)</p>

      <h3>Rule 2: Drop lower-order terms</h3>
      <p>O(n² + n) = O(n²)</p>
      <p>O(n³ + n² + n) = O(n³)</p>

      <h3>Rule 3: Keep the dominant growth rate</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    // n iterations
}

for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; n; j++) {
        // n² iterations
    }
}</code></pre>

      <p>Total work can be represented as n + n². The n² term dominates, so the overall complexity is O(n²).</p>

      <p><strong>Remember:</strong> We simplify the mathematical growth expression, not the code's correctness or its exact runtime.</p>
    </section>

    <section>
      <h2>8. Nested Loops: A Detailed Explanation</h2>

      <h3>Example A: Two full nested loops</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; n; j++) {
        // Constant-time operation
    }
}</code></pre>

      <p>For every value of i, the inner loop runs n times.</p>

      <p>Outer iterations = n. Inner iterations per outer iteration = n.</p>

      <p>Total = n × n = n², so the time complexity is <strong>O(n²)</strong>.</p>

      <h3>Example B: Three full nested loops</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; n; j++) {
        for (int k = 0; k &lt; n; k++) {
            // Constant-time operation
        }
    }
}</code></pre>

      <p>Total iterations = n × n × n = n³. The complexity is <strong>O(n³)</strong>.</p>

      <h3>Example C: Inner loop depends on outer loop</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; i; j++) {
        // Constant-time operation
    }
}</code></pre>

      <p>The inner loop does not always run n times. Its iteration counts are:</p>

      <pre><code>i = 0: 0 iterations
i = 1: 1 iteration
i = 2: 2 iterations
i = 3: 3 iterations
...
i = n - 1: n - 1 iterations</code></pre>

      <p>Total iterations = 0 + 1 + 2 + ... + (n - 1).</p>

      <p>Using the arithmetic-series formula:</p>

      <p>n(n - 1) / 2 = (n² - n) / 2</p>

      <p>After dropping constants and lower-order terms, the complexity is <strong>O(n²)</strong>.</p>

      <p><strong>Important:</strong> Nested loops do not automatically mean O(n²). Count how many times the inner operation actually executes.</p>
    </section>

    <section>
      <h2>9. Sorting and Library Functions</h2>

      <p>Library functions also contribute to a program's overall complexity.</p>

      <h3>Example: Sorting a vector in C++</h3>
      <pre><code>vector&lt;int&gt; nums = {5, 2, 8, 1, 3};

sort(nums.begin(), nums.end());</code></pre>

      <p>For typical C++ standard-library implementations, <code>std::sort</code> has an O(n log n) worst-case comparison complexity.</p>

      <h3>Combining a loop and sorting</h3>
      <pre><code>for (int i = 0; i &lt; n; i++) {
    cout &lt;&lt; nums[i] &lt;&lt; " ";
}

sort(nums.begin(), nums.end());</code></pre>

      <p>The loop is O(n), and sorting is O(n log n).</p>

      <p>Total = O(n) + O(n log n) = <strong>O(n log n)</strong>.</p>

      <p>The sorting term dominates as n grows.</p>

      <p><strong>Connection to Lecture 4:</strong> In Squares of a Sorted Array, squaring and then sorting takes O(n log n). The two-pointer approach avoids sorting and achieves O(n) time by using the fact that the input is already sorted.</p>
    </section>

    <section>
      <h2>10. A Quick Comparison Trick</h2>

      <p>If you are unsure which of two expressions grows faster, try substituting a few small values of n to build intuition.</p>

      <p>For example, compare n² and n log₂ n:</p>

      <table>
        <thead>
          <tr>
            <th>n</th>
            <th>n log₂ n</th>
            <th>n²</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4</td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>8</td>
            <td>24</td>
            <td>64</td>
          </tr>
          <tr>
            <td>16</td>
            <td>64</td>
            <td>256</td>
          </tr>
        </tbody>
      </table>

      <p>These examples show that n² is growing faster in this comparison. Testing small values is a useful intuition-building trick, but the formal comparison comes from analysing the growth rates as n becomes large.</p>
    </section>

    <section>
      <h2>11. Common Mistakes to Avoid</h2>

      <ul>
        <li><strong>Thinking O(1) means one second:</strong> It means constant growth with respect to input size.</li>
        <li><strong>Adding complexities without simplifying:</strong> O(n) + O(n²) simplifies to O(n²).</li>
        <li><strong>Multiplying sequential loops:</strong> Two separate loops usually add their work; nested loops often multiply iteration counts.</li>
        <li><strong>Assuming every nested loop is O(n²):</strong> Inspect the actual loop bounds.</li>
        <li><strong>Ignoring library functions:</strong> Sorting, searching, and other function calls can contribute significant work.</li>
        <li><strong>Treating 10⁸ as a guarantee:</strong> It is only a rough estimate.</li>
        <li><strong>Assuming the same complexity means the same runtime:</strong> Constant factors and implementation details can still matter.</li>
        <li><strong>Confusing time and space complexity:</strong> Time measures growth in work; space measures growth in memory usage.</li>
      </ul>
    </section>

    <section>
      <h2>12. Practice Questions</h2>

      <p>Try each question yourself before revealing the solution. Select the answer you think is correct, then open the explanation.</p>

      <details>
        <summary><strong>Q1. What is the time complexity?</strong></summary>
        <pre><code>int x = 10;
x = x + 5;
cout &lt;&lt; x;</code></pre>
        <p><strong>Answer: O(1)</strong></p>
        <p>There is a fixed number of operations, independent of n.</p>
      </details>

      <details>
        <summary><strong>Q2. What is the time complexity?</strong></summary>
        <pre><code>for (int i = 0; i &lt; n; i++) {
    cout &lt;&lt; i;
}</code></pre>
        <p><strong>Answer: O(n)</strong></p>
        <p>The loop runs n times, performing constant work per iteration.</p>
      </details>

      <details>
        <summary><strong>Q3. What is the time complexity?</strong></summary>
        <pre><code>for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; n; j++) {
        cout &lt;&lt; i + j;
    }
}</code></pre>
        <p><strong>Answer: O(n²)</strong></p>
        <p>The inner loop runs n times for each of the n outer iterations, producing n² operations.</p>
      </details>

      <details>
        <summary><strong>Q4. What is the time complexity?</strong></summary>
        <pre><code>for (int i = 0; i &lt; n; i++) {
    // Constant work
}

for (int j = 0; j &lt; n * n; j++) {
    // Constant work
}</code></pre>
        <p><strong>Answer: O(n²)</strong></p>
        <p>Total work is proportional to n + n². The quadratic term dominates.</p>
      </details>

      <details>
        <summary><strong>Q5. What is the time complexity?</strong></summary>
        <pre><code>while (n &gt; 1) {
    n /= 2;
}</code></pre>
        <p><strong>Answer: O(log n)</strong></p>
        <p>The value is halved on every iteration. The number of halvings required to reach 1 is logarithmic.</p>
      </details>

      <details>
        <summary><strong>Q6. What is the time complexity?</strong></summary>
        <pre><code>for (int i = 0; i &lt; 1000; i++) {
    // Constant work
}</code></pre>
        <p><strong>Answer: O(1)</strong></p>
        <p>The loop runs a fixed 1,000 times, regardless of n. A fixed constant does not change the asymptotic complexity.</p>
      </details>

      <details>
        <summary><strong>Q7. Simplify O(3n² + 5n + 10).</strong></summary>
        <p><strong>Answer: O(n²)</strong></p>
        <p>Drop the constant multiplier 3 and the lower-order terms 5n and 10.</p>
      </details>

      <details>
        <summary><strong>Q8. What is the complexity of sorting followed by one full traversal?</strong></summary>
        <pre><code>sort(nums.begin(), nums.end());

for (int i = 0; i &lt; nums.size(); i++) {
    cout &lt;&lt; nums[i];
}</code></pre>
        <p><strong>Answer: O(n log n)</strong></p>
        <p>Sorting takes O(n log n), and the traversal takes O(n). Their sum simplifies to O(n log n).</p>
      </details>

      <details>
        <summary><strong>Q9. What is the total number of inner-loop iterations?</strong></summary>
        <pre><code>for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; i; j++) {
        // Constant work
    }
}</code></pre>
        <p><strong>Answer: n(n - 1) / 2, giving O(n²).</strong></p>
        <p>The inner loop runs 0, 1, 2, ..., n - 1 times. Summing this sequence produces the formula above.</p>
      </details>

      <details>
        <summary><strong>Q10. Which is generally more scalable for large n: O(n²) or O(n log n)?</strong></summary>
        <p><strong>Answer: O(n log n).</strong></p>
        <p>For sufficiently large inputs, n log n grows more slowly than n².</p>
      </details>
    </section>

    <section>
      <h2>13. Final Revision Sheet</h2>

      <table>
        <thead>
          <tr>
            <th>Code pattern</th>
            <th>Typical time complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fixed number of operations</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>One loop from 0 to n</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Repeatedly halve n</td>
            <td>O(log n)</td>
          </tr>
          <tr>
            <td>Two full nested loops</td>
            <td>O(n²)</td>
          </tr>
          <tr>
            <td>Three full nested loops</td>
            <td>O(n³)</td>
          </tr>
          <tr>
            <td>Typical efficient comparison sorting</td>
            <td>O(n log n)</td>
          </tr>
          <tr>
            <td>Sequential blocks</td>
            <td>Add work, then simplify</td>
          </tr>
          <tr>
            <td>n² + n + 1</td>
            <td>O(n²)</td>
          </tr>
        </tbody>
      </table>

      <h3>The five rules to remember</h3>
      <ol>
        <li>Identify the input size n.</li>
        <li>Count how many times the main operation executes.</li>
        <li>For nested loops, calculate the combined iteration count.</li>
        <li>For sequential blocks, add their work.</li>
        <li>Drop constant factors and lower-order terms to obtain the simplified Big O expression.</li>
      </ol>

      <p><strong>Connection to DSA:</strong> Before choosing an algorithm, look at the constraints. A brute-force solution may be fine for small n, while a two-pointer, binary-search, or other optimized solution may be needed for large n.</p>

      <p><strong>Source note:</strong> These notes follow the supplied Episode 6 timeline and cover the concepts identified in it. The examples and practice questions are added to help you apply those concepts in C++.</p>
    </section>
  `
},





};

// Generate lecture buttons automatically
function renderLectureButtons() {
  sidebar.querySelectorAll(".lecture-btn").forEach(button => {
    button.remove();
  });

  Object.entries(lectures).forEach(([number, lecture]) => {
    const button = document.createElement("button");

    button.className = "lecture-btn";
    button.dataset.lecture = number;
    button.textContent = lecture.title;

    button.addEventListener("click", () => {
      // Close the current lecture if clicked again
      if (notesArea.dataset.openLecture === number) {
        notesArea.innerHTML = "";
        delete notesArea.dataset.openLecture;
        button.classList.remove("active");
        return;
      }

      // Display selected lecture
      notesArea.innerHTML = `
        <h1>${lecture.title}</h1>
        ${lecture.content}
      `;

      notesArea.dataset.openLecture = number;

      // Update active button
      sidebar.querySelectorAll(".lecture-btn").forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });

    sidebar.appendChild(button);
  });
}

renderLectureButtons();
