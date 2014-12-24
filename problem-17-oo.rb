# problem-17.rb
# find the total number of letters used among all the numbers in [1..1000] when spelled out.
# omit hyphens and spaces, and include use of the word "and" (e.g. "one hundred and one")
# more OO than previous answer
class Numb
  def initialize(numeric_value)
    @numeric_value = numeric_value
  end
  def letter_value
    if @numeric_value.between?(1,9)
      numbers_of_letters_in_first_nine_numbers = [3,3,5,4,4,3,5,5,4]
      numbers_of_letters_in_first_nine_numbers[@numeric_value-1]
    elsif @numeric_value.between?(10,19)
      next_ten = [3,6,6,8,8,7,7,9,8,8]
      next_ten[@numeric_value % 10]
    elsif @numeric_value.between?(20,99)
      tens_place = [6,6,5,5,5,7,6,6]
      ones_place = [0,3,3,5,4,4,3,5,5,4]
      i = @numeric_value/10 - 2
      j = @numeric_value % 10
      tens_place[i] + ones_place[j]
    elsif @numeric_value.between?(100,999)
      hundreds_place = [0,10,10,12,11,11,10,12,12,11]
      i = @numeric_value / 100
      remainder = 0
      remainder = Numb.new(@numeric_value % 100).letter_value + 3 unless @numeric_value % 100 == 0
      hundreds_place[i] + remainder
    else # @numeric_value == 1000
      11
    end
  end
end
soln = 0
(1..1000).each do |v|
  soln += Numb.new(v).letter_value
end
puts soln