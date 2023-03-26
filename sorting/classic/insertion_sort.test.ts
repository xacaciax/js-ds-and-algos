describe("insertion_sort", () => {
    test("should return an empty array if passed an empty array", () => {
      expect(insertion_sort([])).toEqual([]);
    });
  
    test("should return the same array if passed an array with only one element", () => {
      expect(insertion_sort([1])).toEqual([1]);
    });
  
    test("should sort an array of integers in ascending order", () => {
      expect(insertion_sort([3, 2, 1])).toEqual([1, 2, 3]);
      expect(insertion_sort([1, 5, 2, 7, 3])).toEqual([1, 2, 3, 5, 7]);
      expect(insertion_sort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  
    test("should not modify the original array", () => {
      const arr = [3, 2, 1];
      insertion_sort(arr);
      expect(arr).toEqual([3, 2, 1]);
    });
  
    test("should handle large arrays", () => {
      const arr = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));
      const sortedArr = insertion_sort(arr);
      for (let i = 0; i < sortedArr.length - 1; i++) {
        expect(sortedArr[i]).toBeLessThanOrEqual(sortedArr[i + 1]);
      }
    });
  });
  