#ifndef MD5_H
#define MD5_H

#include <openssl/evp.h>
#include <string.h>
#include <stdio.h>

#define HASH_SIZE_IN_BYTES 16

int gen_compare_md5(const char *mensagem, const int msg_len, const unsigned char* hash_bin);
void string_to_bin(const char *hex_str, unsigned char *bin);

#endif
