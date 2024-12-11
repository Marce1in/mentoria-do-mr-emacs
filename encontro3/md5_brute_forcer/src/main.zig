const std = @import("std");
const thread = std.Thread;
const math = std.math;

const md5 = @cImport({
    @cInclude("md5.h");
    @cInclude("md5.c");
});

const ASCII_ALPHABET_START = 97;
const ASCII_ALPHABET_END = 122;
const ALPHABET_LEN = ASCII_ALPHABET_END - ASCII_ALPHABET_START + 1;
const WORD_LEN = 5;

const HASH = "5d41402abc4b2a76b9719d911017c592";
var BIN_HASH: [md5.HASH_SIZE_IN_BYTES]u8 = .{0} ** md5.HASH_SIZE_IN_BYTES;

pub fn main() !void {
    md5.string_to_bin(HASH, &BIN_HASH);
    std.debug.print("{}", .{ALPHABET_LEN});

    // const final_word: [WORD_LEN:0]u8 = .{ASCII_ALPHABET_END} ** WORD_LEN;
    // var word: [WORD_LEN:0]u8 = .{ASCII_ALPHABET_START} ** WORD_LEN;
    //
    // var ASCII_WORD: u8 = 0;
    // while (true) : (ASCII_WORD += 1) {
    //     if (word[ASCII_WORD] >= WORD_LEN){
    //         ASCII_WORD = 0;
    //     }
    //
    //     word[ASCII_WORD] += 1;
    //
    //
    //     if (std.mem.eql(u8, &final_word, &word)) {
    //         std.debug.print("Não encontrei pai :(", .{});
    //         break;
    //     }
    // }
}
