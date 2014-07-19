FactoryGirl.define do
  factory :user do
    sequence(:username) { |n| "qian#{n}" }
    password "123456"
    sequence(:email) { |n| "qian#{n}@example.com" }
  end
end
