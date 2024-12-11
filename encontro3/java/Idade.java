import java.io.IOException;
import java.util.ArrayList;

public class Idade {
    public static void main(String[] args) throws Exception {
        System.out.print("Digite a sua idade: ");

        final int idade = _promptAge();

        System.out.println(idade);

        if (idade > 21) {
            System.out.println("Pode entrar");
        } else {
            System.out.println("Não pode entrar");
        }
    }

    private static final int _promptAge() throws Exception {
        final ArrayList<Number> nums = new ArrayList<Number>();

        while (true) {
            final int byteNum;
            final int num;

            try {
                byteNum = System.in.read();
            } catch (IOException e) {
                e.printStackTrace();
                throw new Exception("Error on getting IO input");
            }

            if ('\n' == (char) byteNum)
                break;

            try {
                num = _convertToNumberChar(byteNum);
            } catch (IOException e) {
                e.printStackTrace();
                throw new Exception("Error converting byte to number char");
            }

            nums.add(num);
        }

        final int composedNum = _composeNumber(nums);

        return composedNum;
    }

    private static final int _composeNumber(ArrayList<Number> nums) {
        int num = 0;
        for (int i = nums.size(), j = 0; i > 0; i--, j++) {
            num += (int) nums.get(i - 1) * (Math.pow(10, j));
        }
        return num;
    }

    private static final int _convertToNumberChar(int byteNum) throws Exception {
        if (!_isNumber(byteNum))
            throw new Exception("Error the byte is not a number in the ASCII table");
        final int num = byteNum - 48;
        return num;
    }

    // Check if the byte points to any number representation in the ASCII table
    private static final boolean _isNumber(int byteNum) {
        if (byteNum >= 48 && byteNum <= 57)
            return true;
        else
            return false;
    }
}
