
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
