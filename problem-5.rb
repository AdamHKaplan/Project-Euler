# problem-5.rb
# find the smallest positive number that is evenly divisible by all numbers btwn 1..20

class Float
  def is_pretty?
    to_i == self
  end
end

divisors = (2..20)
solved = false
iter = 20.0
while !solved

  divisors.each do |i|

    unless (iter/i).is_pretty?
      break
    end
    if i==20
      solved = true
      puts iter
    end
  end
  iter+=20
end

