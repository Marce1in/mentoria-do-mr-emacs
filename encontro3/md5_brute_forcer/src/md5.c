#include "md5.h"

int gen_compare_md5(const char *mensagem, const int msg_len, const unsigned char* hash_bin) {
    EVP_MD_CTX *mdctx = EVP_MD_CTX_new();

    EVP_DigestInit_ex(mdctx, EVP_md5(), NULL);
    EVP_DigestUpdate(mdctx, mensagem, msg_len);

    unsigned char hash[HASH_SIZE_IN_BYTES];
    EVP_DigestFinal_ex(mdctx, hash, NULL);
    EVP_MD_CTX_free(mdctx);

    if (memcmp(hash, hash_bin, HASH_SIZE_IN_BYTES) == 0)
        return 1;
    else
        return 0;
}


//Chatgpt passou por aqui
void string_to_bin(const char *hex_str, unsigned char *bin) {
    for (int i = 0; i < HASH_SIZE_IN_BYTES; i++)
        sscanf(hex_str + 2 * i, "%2hhx", &bin[i]);
}
