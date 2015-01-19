# problem-5.rb
# find the smallest positive number that is evenly divisible by all numbers btwn 1..20
solution = 1.0
divisors = (2..20)
class Float
  def is_pretty?
    to_i == self
  end
end
def lcd(i, si)
  (2..i).each do |div|
    if(Float(i)/div).is_pretty? && (Float(si)/div).is_pretty?
      return div
    end
  end
end

divisors.each do |i|
  unless (solution/i).is_pretty?
    solution *= lcd(i, solution * i)
  end
end

puts solution.to_i