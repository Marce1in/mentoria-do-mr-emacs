#include <stdio.h>
#include "md5.h"

int main(){
    if(gen_compare_md5("ii", 2)){
        printf("foo");
    }
}
