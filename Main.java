

import java.util.Scanner;

class Solution {
    public static int romanToInt(char roman) {
        switch(roman){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default : return 0;
        }
    }

    public static void Main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String roman = sc.next();
        int num = 0;

        for (int i = 0; i < roman.length(); i++) {
            num += romanToInt(roman.charAt(i));  // Pass each char
        }

        sc.close();
        System.out.println(num);
    }
}
