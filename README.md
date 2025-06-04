TASK 3

Move heavy computation to Web Worker to reduce TBT

### Why

The Dashboard component previously executed a heavy synchronous loop during `useEffect`, which resulted in a high Total Blocking Time (TBT) and negatively impacted performance.

### What Changed

- Created a `sum.worker.ts` Web Worker to handle the summation computation off the main thread.
- Refactored the `Dashboard` component to instantiate and communicate with the worker.
- Confirmed TBT is now zero in performance reports.

### Impact

- ✅ Dramatically improved performance (TBT = 0)
- ✅ Main thread remains responsive during initial load
- 🧪 Tested with Chrome DevTools & Lighthouse

Closes #<your issue number if any>
