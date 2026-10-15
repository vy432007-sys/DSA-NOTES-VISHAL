
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
