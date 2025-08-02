class Solution2 {
    fun finalValueAfterOperations(operations: Array<String>): Int {
        var x = 0
        if (operations.isEmpty()) return 0

        for (operation in operations) {
            when (operation.trim()) {
                "++X", "X++" -> x += 1
                "--X", "X--" -> x -= 1
            }
        }

        return x
    }
}

fun main() {
    val output = Solution2().finalValueAfterOperations(arrayOf("--X", "X++", "X++"))
    println(output)
}
