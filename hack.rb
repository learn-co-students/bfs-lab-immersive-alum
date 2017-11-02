def stairCase(n)
  (1..n).each {|i| puts(" " * (n-i) + "#" * (i))}
end



def isPalindrome(string)
  puts (string)
  if string[0] == string[-1]
    if string.length == 2
      return true
    else
      return isPalindrome(string[1..-2])
    end
  else
    return false
  end
end


def reverse(string)
  if string.length > 1
    puts (string)
    return string.slice!(-1) + reverse(string.slice(0..-2))
  end
end
