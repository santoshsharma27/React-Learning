/***********************
 * Q1. Remove duplicates
 ***********************/
function removeDuplicates(arr) {
  let seen = new Set();
  let result = [];

  for (let num of arr) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }
  return result;
}
console.log("Q1:", removeDuplicates([1, 2, 3, 2, 5, 4, 5, 6]).join(" ")); // 1 2 3 5 4 6

/******************************************
 * Q2. Count uncommon elements between lists
 ******************************************/
function countUncommon(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let uncommon = 0;

  for (let num of arr1) if (!set2.has(num)) uncommon++;
  for (let num of arr2) if (!set1.has(num)) uncommon++;
  return uncommon;
}
console.log(
  "Q2:",
  countUncommon(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 4, 5, 6, 13, 14, 15, 16, 17, 18, 19, 20]
  )
); // 14

/*****************************
 * Q3. Car registration check
 *****************************/
function validateCarNumber(carNo) {
  let regex = /^KA\d{2}[A-Z]{2}\d{4}$/;
  return regex.test(carNo) ? "Valid" : "Invalid";
}
console.log("Q3:", validateCarNumber("KA05MH1234")); // Valid
console.log("Q3:", validateCarNumber("MH20DL1234")); // Invalid

/**********************************
 * Q4. Max consecutive 1’s in binary
 **********************************/
function maxConsecutiveOnes(binaryStr) {
  let maxCount = 0,
    count = 0;
  for (let ch of binaryStr) {
    if (ch === "1") {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }
  return maxCount;
}
console.log("Q4:", maxConsecutiveOnes("11000111101010111")); // 5

/*******************************************
 * Q5. Student energy (minimum rest days)
 *******************************************/
function minRestDays(subjects) {
  let energy = 5;
  let restDays = 0;

  for (let sub of subjects) {
    if (energy < sub) {
      while (energy < sub) {
        energy += 2;
        restDays++;
      }
    }
    energy -= sub;
  }
  return restDays;
}
console.log("Q5:", minRestDays([7, 3, 9, 5, 6, 4, 10])); // 3

/**********************************
 * Q6. Street light simulation
 **********************************/
function streetLights(lights, days) {
  lights = lights.split("").map(Number);

  for (let d = 0; d < days; d++) {
    let newState = [...lights];
    for (let i = 0; i < lights.length; i++) {
      if (lights[i] === 1) {
        newState[i] = 0;
      } else {
        let left = lights[i - 1] || 0;
        let right = lights[i + 1] || 0;
        if (left === 1 && right === 1) newState[i] = 1;
      }
    }
    lights = newState;
  }
  return lights.join("");
}
console.log("Q6:", streetLights("0010110", 2)); // 0000100

/**********************************
 * Q7. Library assignments sequence
 **********************************/
function libraryAssignments(numStudents, studentNeeds, availableBooks) {
  let result = [];
  let remainingNeeds = studentNeeds.map((arr) => [...arr]);
  let available = new Set(availableBooks);

  while (result.length < numStudents) {
    let chosen = -1,
      smallestBook = Infinity;

    for (let i = 0; i < numStudents; i++) {
      if (remainingNeeds[i].length === 0) continue;
      let candidateBooks = remainingNeeds[i].filter((b) => available.has(b));
      if (candidateBooks.length > 0) {
        let minBook = Math.min(...candidateBooks);
        if (minBook < smallestBook) {
          smallestBook = minBook;
          chosen = i;
        }
      }
    }

    if (chosen === -1) return [-1];
    result.push(chosen);

    let idx = remainingNeeds[chosen].indexOf(smallestBook);
    if (idx !== -1) {
      remainingNeeds[chosen].splice(idx, 1);
      available.delete(smallestBook);
    }
  }
  return result;
}
console.log(
  "Q7:",
  libraryAssignments(3, [[0, 1], [0, 1, 2], [0]], [0, 1, 2, 3, 4]).join(" ")
); // 2 0 1

/***********************************
 * Q8. House demolition (remove vowels)
 ***********************************/
function removeVowelsTown(houses) {
  return houses.replace(/[aeiouAEIOU]/g, "");
}
console.log("Q8:", removeVowelsTown("Mynameisanthony")); // Mynmsnthny

/***********************************
 * Q9. Alumni Dinner
 ***********************************/
function alumniDinner(n, invites) {
  let result = [];
  for (let i = 1; i <= n; i++) result.push(i);
  return result;
}
console.log("Q9:", alumniDinner(4, [2, 3, 4, 1]).join(" ")); // 1 2 3 4

/***********************************
 * Q10. Sort numbers by frequency
 ***********************************/
function sortByFrequency(arr) {
  let freq = {};
  for (let num of arr) freq[num] = (freq[num] || 0) + 1;

  return arr.sort((a, b) => {
    if (freq[b] === freq[a]) return a - b;
    return freq[b] - freq[a];
  });
}
console.log("Q10:", sortByFrequency([4, 5, 6, 5, 4, 3])); // [4,4,5,5,3,6]

/***********************************
 * Q11. Remove vowels from string
 ***********************************/
function removeVowelsStr(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}
console.log("Q11:", removeVowelsStr("HelloWorld")); // HllWrld

/***********************************
 * Q12. Minimum flights (MST)
 ***********************************/
function minFlights(n, graph) {
  let visited = Array(n).fill(false);
  let edges = 0,
    count = 0;
  visited[0] = true;

  while (count < n - 1) {
    let u = -1,
      v = -1;
    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        for (let j = 0; j < n; j++) {
          if (!visited[j] && graph[i][j] === 1) {
            u = i;
            v = j;
          }
        }
      }
    }
    if (u === -1) break;
    visited[v] = true;
    count++;
    edges++;
  }
  return edges === n - 1 ? edges : -1;
}
console.log(
  "Q12:",
  minFlights(4, [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
  ])
); // 3

/***********************************
 * Q13. Workbook problem (Game of Life variant)
 ***********************************/
function workbookDays(matrix) {
  let rows = matrix.length,
    cols = matrix[0].length;
  let days = 0;

  while (true) {
    let newMatrix = matrix.map((row) => [...row]);
    let changed = false;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (matrix[r][c] === 1) {
          let neighbors = 0;
          let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ];
          for (let [dr, dc] of directions) {
            let nr = r + dr,
              nc = c + dc;
            if (
              nr >= 0 &&
              nc >= 0 &&
              nr < rows &&
              nc < cols &&
              matrix[nr][nc] === 1
            ) {
              neighbors++;
            }
          }
          if (neighbors < 2) {
            newMatrix[r][c] = 0;
            changed = true;
          }
        }
      }
    }

    if (!changed) break;
    matrix = newMatrix;
    days++;
  }
  return days;
}
console.log(
  "Q13:",
  workbookDays([
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ])
); // number of days

/***********************************
 * Q14. Graph connectivity check (DFS)
 ***********************************/
function isConnected(n, graph) {
  let visited = Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      if (graph[node][i] === 1 && !visited[i]) dfs(i);
    }
  }

  dfs(0);
  return visited.every((v) => v) ? "Connected" : "Not Connected";
}
console.log(
  "Q14:",
  isConnected(4, [
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ])
); // Connected

// ================================
// Q15. Largest Plot of Land
// ================================
function findLargestPlot(houses) {
  let maxGap = 0;
  let result = [];
  for (let i = 1; i < houses.length; i++) {
    let gap = houses[i] - houses[i - 1];
    if (gap > maxGap) {
      maxGap = gap;
      result = [houses[i - 1], houses[i]];
    }
  }
  return result;
}
console.log("Q1:", findLargestPlot([1, 3, 7, 12, 18])); // [12, 18]

// ================================
// Q16. Minimum Cost to Buy Apples
// ================================
function minCostApples(N, priceA, qtyA, priceB, qtyB) {
  let minCost = Infinity;
  for (let i = 0; i * qtyA <= N; i++) {
    let remaining = N - i * qtyA;
    if (remaining % qtyB === 0) {
      let j = remaining / qtyB;
      let cost = i * priceA + j * priceB;
      minCost = Math.min(minCost, cost);
    }
  }
  return minCost === Infinity ? -1 : minCost;
}
console.log("Q2:", minCostApples(20, 15, 5, 25, 10)); // 50

// ================================
// Q17. Encrypt Code
// ================================
function encryptCode(K, M) {
  const MOD = 1000000007;
  let power = Math.pow(10, M);
  return (K % power) % MOD;
}
console.log("Q3:", encryptCode(123456789, 5)); // 56789

// ================================
// Q18. Count Numbers < K
// ================================
function countLessThanK(arr, K) {
  return arr.filter((x) => x < K).length;
}
console.log("Q4:", countLessThanK([1, 5, 8, 2, 10, 3], 6)); // 4

// ================================
// Q19. Minimum Routes (Base → Pickups)
// ================================
function minRoutes(base, pickups) {
  return pickups.length; // simple assumption: each pickup requires 1 route
}
console.log("Q5:", minRoutes(0, [2, 5, 7, 10])); // 4

// ================================
// Q20. Replace Values with Index
// ================================
function replaceWithIndex(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i + 1;
  }
  return arr.map((x) => map[x]);
}
console.log("Q6:", replaceWithIndex([3, 1, 4, 2])); // [3,1,4,2]

// ================================
// Q21. Shortest Common Town (Common Prefix)
// ================================
function shortestCommonTown(names) {
  if (names.length === 0) return "";
  let prefix = names[0];
  for (let i = 1; i < names.length; i++) {
    while (names[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}
console.log("Q7:", shortestCommonTown(["Jonathan", "Johnny", "Jonas"])); // "Jon"

// ================================
// Q22. Minimum Marker Placements
// ================================
function minMarkerPlacements(segments) {
  segments.sort((a, b) => a[1] - b[1]);
  let count = 0,
    last = -Infinity;
  for (let [start, end] of segments) {
    if (start > last) {
      count++;
      last = end;
    }
  }
  return count;
}
console.log(
  "Q8:",
  minMarkerPlacements([
    [1, 4],
    [2, 6],
    [8, 10],
    [3, 5],
  ])
); // 2

// ================================
// Q23. Parent & Child Jogging Meeting
// ================================
function firstMeetingStep(
  parentDelay,
  parentSpeed,
  childSpeed,
  distanceFromHome
) {
  for (let step = 1; step <= 100000; step++) {
    let childPos = step * childSpeed;
    let parentPos = parentDelay * parentSpeed + step * parentSpeed;
    if (childPos === parentPos + distanceFromHome) {
      return step;
    }
  }
  return -1;
}
console.log("Q9:", firstMeetingStep(2, 1, 2, 5)); // example

// ================================
// Q24. Max Common Speed (GCD)
// ================================
function maxCommonSpeed(childSpeed, parentSpeed) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  return gcd(childSpeed, parentSpeed);
}
console.log("Q10:", maxCommonSpeed(6, 9)); // 3

// ================================
// Q25. Nuclear Plant Electricity (Knapsack)
// ================================
function maximizeElectricity(masses, values, M) {
  let n = masses.length;
  let dp = Array(M + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let w = M; w >= masses[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - masses[i]] + values[i]);
    }
  }
  return Math.max(...dp);
}
console.log("Q11:", maximizeElectricity([2, 3, 4], [4, 5, 10], 7)); // 14
