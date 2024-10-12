type EightBitArrayType = [number, number, number, number, number, number, number, number];

export const parseByte = (num: string): EightBitArrayType => {
    const nums = num.split('');

    return [Number(nums[0]), Number(nums[1]), Number(nums[2]), Number(nums[3]), Number(nums[4]), Number(nums[5]), Number(nums[6]), Number(nums[7])];
};