class Solution {
    fun getConcatenation(nums: IntArray): IntArray {
        return  nums+nums
    }

    fun getConcatenationV2(nums: IntArray): IntArray {
        val size = nums.size
        val result= IntArray(2*size)
        for(i in 0 until size){
            result[i] = nums[i]
            result[i+size] = nums[i]
        }

        return result
    }
}



fun main(){
   val output = Solution().getConcatenationV2(intArrayOf(1,2,1)).toList()
    println(output)
}