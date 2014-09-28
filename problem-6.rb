# problem-6.rb
# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

def sum_of_squares_first_hundred_natural_numbers
  to_return = 0
  (1..100).each do |x|
    to_return += x**2
  end
  to_return
end
def square_of_sum_first_hundred_natural_numbers

  to_return = 0
  (1..100).each do |x|
    to_return+=x
  end

  to_return= to_return**2
  puts to_return
  to_return

end
puts (sum_of_squares_first_hundred_natural_numbers - square_of_sum_first_hundred_natural_numbers).abs