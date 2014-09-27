# problem-17.rb
# find the total number of letters used among all the numbers in [1..1000] when spelled out.
# omit hyphens and spaces, and include use of the word "and" (e.g. "one hundred and one")

def numbers_of_letters_in_first_nine_numbers # 1-9
  [3,3,5,4,4,3,5,5,4]
end

def next_ten # 10-19
  [3,6,6,8,8,7,7,9,8,8]
end

def numbers_of_letters_in_first_nineteen_numbers # 1-19
  numbers_of_letters_in_first_nine_numbers + next_ten
end

def get_new_array_of_ten_numbers(to_add) # for all numbers with [2..9] in tens, and [0..9] in ones
  [0,3,3,5,4,4,3,5,5,4].map{|x| x+to_add} 
end

def to_add_for_all_hundreds # adding "hundred and" for numbers in the hundreds - will subtract 3 later for the "hundred" #'s
  numbers_of_letters_in_first_nine_numbers.map{|x| x+10}
end


def first_ninety_nine # array containing numbers of letters for # 1-99
  to_return = numbers_of_letters_in_first_nineteen_numbers
  [6,6,5,5,5,7,6,6].each do |x| # values in array correspond to # of letters added for each ten
    to_return += get_new_array_of_ten_numbers(x)
  end
  to_return
end

def go # putting it all together
  to_return = first_ninety_nine.reduce(:+) # sum of an array
  to_add_for_all_hundreds.each do |x|
    to_return += x * 100 - 3 + first_ninety_nine.reduce(:+) # the "-3" alluded to in line 19
  end
  puts to_return+11 # add 11 for one-thousand
end
go