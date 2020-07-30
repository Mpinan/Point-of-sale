class User < ApplicationRecord
    has_secure_password
    
    has_many :tables
    has_many :items

    validates_presence_of :email
    validates_uniqueness_of :email
    
end
